'use strict';

//1 generate a target number 0-20
let targetNumber = Math.floor(Math.random() * 20 + 1);
console.log(targetNumber);
//2. get user input to compare with that target
const userGuess = document.querySelector('input');
const userClick = document.querySelector('.btn.check');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const tryAgain = document.querySelector('.btn.again');
const body = document.querySelector('body');
const number = document.querySelector('.number');
let curScore = 20;
let maxScore = 0;
let finalScore;

userClick.addEventListener('click', () => {
  const userValue = Number(userGuess.value);
  // === change css and display number ; and store that number(highest)
  if (userValue === targetNumber) {
    message.innerText = 'Correct Number';
    finalScore = curScore;
    if (finalScore >= maxScore) {
      maxScore = finalScore;
    }
    highScore.innerText = maxScore;
    body.style.backgroundColor = '#60b347';
    number.innerText = targetNumber;
    //2.1 1== reduce score and, > target too high, < target too low;
  } else {
    userValue > targetNumber
      ? (message.innerText = 'Too high')
      : (message.innerText = 'Too low');
    curScore -= 1;
  }
  score.innerText = curScore;
});

// reset value
tryAgain.addEventListener('click', () => {
  targetNumber = Math.floor(Math.random() * 20 + 1);
  console.log(targetNumber);
  body.style.backgroundColor = '#222';
  curScore = 20;
  finalScore = 0;
  message.innerText = 'Start guessing';
  userGuess.value = '0';
  score.innerText = curScore;
  highScore.innerText = maxScore;
  number.innerText = '?';
});
