// Objective : To get the no. of days in a month
"use strict";

const prompt = require(`prompt-sync`)({sigintok: true});
const month = prompt("Enter your month (in number): ");

function getDaysInAMonth(month) {
    return new Date(2023, month, 0).getDate();
}

console.log(`No. of days in month ${month} of year ${year}: ${getDaysInAMonth(month, year)}`);
