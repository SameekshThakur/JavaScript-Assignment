// Objective : To find first and last occurence of word "pw skills in an Array"
"use strict";

const elements = ["Ineuron" ,"GeeksforGeeks", "pw skills", "GeeksforGeeks", "pw skills", "Ineuron"];

const firstOccurence = elements.indexOf('pw skills');
const lastOccurence = elements.lastIndexOf('pw skills');

console.log(`First Occurence at Position : ${firstOccurence}
Last Occurence at Position : ${lastOccurence}`);

