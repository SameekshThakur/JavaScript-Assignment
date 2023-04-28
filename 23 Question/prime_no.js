// Objective : To check wether the number is prime or not.

"use strict";

const prompt = require('prompt-sync')({sigintok:true});
const num = prompt("Enter the number to check it's prime or not : ");

function isPrime(num) {
    if(num < 2) {
        return "Neither prime nor composite"; 
    }
    for(let i = 2; i <= Math.sqrt(num); i++) {
      if(num % i === 0){
        return "Not Prime";
      } 
    }
    return "Prime";
}

console.log(isPrime(num));

  