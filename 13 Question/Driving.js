// Objective : Check wether the user is elligibile for driving or not.
"use strict";

const prompt = require('prompt-sync')({sigintok: true});
const name = prompt("Please enter yout full name : ");
const age = prompt("Please enter your age : ");

function Ellgibility(age){
    if(age>=18){
        console.log("Elligible to Drive.");
    }
    else{
        years_to_wait = 18 - age;
        console.log(`Sorry ${name} wait atleast for ${years_to_wait} years to be elligible for driving.`);
    }
}

Ellgibility(age);