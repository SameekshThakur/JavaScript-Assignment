// Objective : To get the no. of days in a month including leap year
"use strict";

const prompt = require(`prompt-sync`)({sigintok: true});
const month = prompt("Enter your month (in number) : ");
const year = prompt("Enter your year : ");

function getDaysInAMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

console.log(`No. of days in month ${month} of year ${year}: ${getDaysInAMonth(month, year)}`);