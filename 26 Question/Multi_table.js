// Objective : Take the user input and show the multiplication table of that number till 10th multiple
"use strict";

const prompt = require(`prompt-sync`)({sigintop: true});
let num = prompt("Enter your Number : ");

function Multi(num){
    let multi = 0;
    let i = 1;
    while(i<=10){
        multi = i*num;
        console.log(`${num}X${i} = ${multi}`);
        i++;
    }
}

Multi(num);