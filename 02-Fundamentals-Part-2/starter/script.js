'use strict';

// Array

const array1 = ['a', 'b', 'c'];
const newLength = array1.push('New');
console.log(array1);
console.log(newLength);

const danilo = {
  firstName: 'Danilo',
  lastName: 'Di Bonaventura',
  year: 1997,
  eyes: 'Blue',
  friends: ['Sandro', 'Michelone', 'Zaccaria'],
  job: 'Lifeguard',
  hasDriverLicense: true,

  calcAge: function () {
    this.age = 2037 - this.year;
    return this.age;
  },

  description: function () {
    return `${this.firstName} is a ${this.calcAge()} ${this.job}, and he has ${
      this.hasDriverLicense ? 'a' : 'no'
    } driver's license`;
  },
};

console.log(
  `${danilo.firstName} has ${danilo.friends.length} friends and his best friend is ${danilo.friends[0]}`
);
// call the function first-> otherwise this.year is undefined, since the code never be excuted
console.log(danilo.calcAge());
console.log(danilo.year);

console.log(danilo.description());
