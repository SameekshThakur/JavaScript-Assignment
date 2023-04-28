// Objective : To create even odd array b/w 0 to 100

"use strict";

let even = new Array();
let odd = new Array();
let i = 0;
while(i<=100){
    if(i%2==0){
        even.push(i);
    }
    else{
        odd.push(i);
    }
    i+=1;
}

console.log(`Even Array : ${even}`);
console.log(`Odd Array : ${odd}`);