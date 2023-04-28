// Objective : To calculate the student grade on the basis of his score
"use strict";

const prompt = require('prompt-sync')({sigintok: true});
const stuName = prompt("Enter Student Name : ");
const score = prompt("Enter score : ") ;

function getGrades(name, score){

    if(score>=0 && score<=100){
        if(score>=80 && score<=100){
            console.log(`${name} scored 'A' Grade`);
        }
        else if(score>=70 && score>=79){
            console.log(`${name} scored 'B' Grade`);
        }
        else if(score>=60 && score>=69){
            console.log(`${name} scored 'C' Grade`);
        }
        else if(score>=50 && score>=59){
            console.log(`${name} scored 'B' Grade`);
        }
        else{
            console.log(`${name} you are failed. Better luck next Time!!!`);
        };
    }
    else{
        console.log('Incorrect Input');
    };

};

getGrades(stuName, score);