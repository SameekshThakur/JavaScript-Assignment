
// Objective : To prepare a calculator which is going to perform operations like addition, subtraction, multiplication and division.
"use strict";

const prompt = require(`prompt-sync`)({sigintok: true});

const num1 = prompt("Enter your first number : ");
const num2 = prompt("Enter your second number : ");

const operations = prompt(`Operations to perform =>
Addition : "+"
Subtraction : "-"
Multiplication : "*"
Division : "/"

Enter your operator : `);

switch (operations) {
    case "+":
        let sum = num1+num2;
        console.log(`Sum of numbers ${num1} and ${num2} : ${sum}`);
        break;

    case "-":
        let sub = num1>num2 ? num1-num2 : num2-num1;
        console.log(`Substraction of numbers ${num1} and ${num2} : ${sub}`);
        break;

    case "*":
        let mult = num1*num2;
        console.log(`Multiplication of numbers ${num1} and ${num2} : ${mult}`);
        break;

    case "/":
        let div = num2==0 ? console.log("Division can't be performed since your second input value is 0") : console.log(`Division of ${num1} and ${num2} : ${num1/num2}`);;
        console.log(`${div}`);
        break;

    default:
        console.log("Wrong Input!!!!");
        
}

