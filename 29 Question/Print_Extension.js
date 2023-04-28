// Objective : To print the file's extension as a new string.
"use strict";

const prompt = require("prompt-sync")({sigintok:true});
let fileName = prompt("Enter file name with extension : ");
let exe = fileName.indexOf(".");
let sum = "";
for(let i=exe; i<fileName.length; i++){
    sum+=fileName[i];
}
console.log(`Your Extension : ${sum}`);