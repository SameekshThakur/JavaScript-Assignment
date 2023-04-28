// Objective : To calculate the BMI of people whose age is 20 years old or older.
"use strict";

const prompt = require(`prompt-sync`)({sigintok: true});

let name = prompt("Enter your name : ");
let weight = prompt("Enter your weight(in Kg) : ");
let height = prompt("Enter your height(in m) : ");

function BMI(name, weight, height){
    let bmi = weight/(height**2);
    
    if (bmi<18.5) {
        console.log(`${name} you are Underweight`);
    } 
    if (bmi>=18.5 && bmi<25) {
        console.log(`${name} your weight is normal`);
    }
    if (bmi>=25 && bmi<=29.9) {
        console.log(`${name} you are Overweight`);
    }
    else {
        console.log(`${name} you are Obese please maintain your BMI.`);
    }
}

BMI(name, weight, height);