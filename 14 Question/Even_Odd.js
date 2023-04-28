// Objective : To check if the number is evn or odd.
"use strict";

const prompt = require('prompt-sync')({sigintok : true});
const number = prompt("Enter a number : ");

function EvenOdd(number){
    if(number%2 === 0){
        console.log(`${number} is an Even Number`);
    }
    else{
    console.log(`${number} is an Odd Number`);
    }
};

EvenOdd(number);