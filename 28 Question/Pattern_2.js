// Objective : Print a square pattern, if the input is 3 then the output should be similar to the given output
//	   ***
//	   ***
//	   ***

"use strict";

const prompt = require(`prompt-sync`)({sigintok: true});
let num = prompt("Enter the no. of times you want the square pattern : ");

function SquarePattern(num){
    let row = '';
    for(let i = 1; i<=num; i++){
        row+='*';
    }
    for(let i = 1; i<=num; i++){
        console.log(row);
    }
}

SquarePattern(num);