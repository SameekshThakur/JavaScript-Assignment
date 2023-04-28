// Objective : Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
//	     *
//      ***
//     *****

"use strict";

const prompt = require(`prompt-sync`)({sigintok: true});
let num = prompt("Enter the no. of times you want the pyramid pattern : ");

function PyrmidPattern(num){
    let spaces, stars;
    for (let i = 1; i <= num; i++) {
        spaces = ' '.repeat(num - i);
        stars = '*'.repeat(i * 2 - 1);
        console.log(spaces + stars + spaces);
  }
}

PyrmidPattern(num);