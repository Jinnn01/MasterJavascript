'use strict';

// reset game
const resetBtn = document.querySelector('.btn--new');
const playerScores = document.querySelectorAll('.score');
const diceImage = document.querySelector('.dice');
resetBtn.addEventListener('click', function () {
  for (let i = 0; i < playerScores.length; i++) {
    playerScores[i].innerText = 0;
  }
  diceImage.classList.add('hidden');
});

// player
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

// curren score
let currentScore1 = 0;
let currentScore2 = 0;
const curscore1 = document.querySelector('#current--0');
const curscore2 = document.querySelector('#current--1');

// total score
let totalScore1 = 0;
let totalScore2 = 0;
const score1 = document.querySelector('#score--0');
const score2 = document.querySelector('#score--1');

// name
const name1 = document.querySelector('#name--0');
const name2 = document.querySelector('#name--1');

// roll dice
const rollDiceBtn = document.querySelector('.btn--roll');
const randomNumber = function () {
  // 1 - 6
  return Math.floor(Math.random() * 6 + 1);
};

rollDiceBtn.addEventListener('click', function () {
  const number = randomNumber();
  // change dice image
  diceImage.classList.remove('hidden');
  diceImage.src = `dice-${number}.png`;
  if (number !== 1) {
    if (player1.classList.contains('player--active')) {
      currentScore1 += number;
      curscore1.innerText = currentScore1;
    } else {
      currentScore2 += number;
      curscore2.innerText = currentScore2;
    }
  } else {
    //
    console.log('Switch! And current score should be 0');
    switchPlayer();
  }
});

// hold
const holdBtn = document.querySelector('.btn--hold');

holdBtn.addEventListener('click', function () {
  if (player1.classList.contains('player--active')) {
    totalScore1 += currentScore1;
    score1.innerText = totalScore1;
    currentScore1 = 0;
    if (totalScore1 >= 20) {
      player1.classList.add('player--winner');
      name1.classList.add('player--winner');
    }
  } else {
    totalScore2 += currentScore2;
    score2.innerText = totalScore2;
    currentScore2 = 0;
    if (totalScore2 >= 20) {
      player2.classList.add('player--winner');
      name2.classList.add('player--winner');
    }
  }

  // switch user
  switchPlayer();
});

const switchPlayer = function () {
  if (player1.classList.contains('player--active')) {
    player1.classList.remove('player--active');
    player2.classList.add('player--active');
    currentScore1 = 0;
    curscore1.innerText = currentScore1;
  } else {
    player2.classList.remove('player--active');
    player1.classList.add('player--active');
    currentScore2 = 0;
    curscore2.innerText = currentScore2;
  }
};

// // define who's the winner
// if (totalScore1 >= 20) {
//   name1.classList.add('player--winner');
// }
// if (totalScore2 >= 20) {
//   name2.classList.add('player--winner');
// }
