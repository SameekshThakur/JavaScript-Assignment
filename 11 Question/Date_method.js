// Objective : Use the Date object to do the following activities
"use strict";

// 1. What is the year today?
let x = new Date();
console.log(`Current Year : ${x.getFullYear()}`); 

// 2. What is the month today as a number?
console.log(`Present Month in Number : ${x.getMonth()+1}`);

// 3. What is the date today?
console.log(`Date today : ${x.getDate()}`);

// 4. What is the day today as a number?
console.log(`Day today as a Number : ${x.getDay()}`);

// 5. What is the hours now?
console.log(`Hours now : ${x.getHours()}`);

// 6. What is the minutes now?
console.log(`Minutes now : ${x.getMinutes()}`);

// 7. Find out the numbers of seconds elapsed from January 1, 1970 to now?
let y = new Date(1970-01-01);
no_of_seconds_ellapsed = (x - y)/1000;  // converting milliseconds to seconds by dividing by 1000
console.log(`No. of seconds elapsed from Jan 1, 1970 to Now : ${no_of_seconds_ellapsed}`);
