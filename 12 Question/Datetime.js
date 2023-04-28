
// Objective : To show the date and time in human readable form with different formats

"use strict";

let now = new Date();
const formattedTime_1 = now.toISOString().slice(0, 16).replace("T", " "); 

const formattedTime_2 = DateFormatter();

const formattedTime_3 = now.toLocaleString('en-GB', { timeZone: 'UTC' , day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false }).replace(",", "");

function DateFormatter(){
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear().toString();
    const hour = now.getHours().toString().padStart(2, '0');
    const minute = now.getMinutes().toString().padStart(2, '0');
    const formattedTime = `${day}-${month}-${year} ${hour}:${minute}`;
    return formattedTime;
}

console.log(`YYYY-MM-DD HH:mm => ${formattedTime_1}
DD-MM-YYYY HH:mm => ${formattedTime_2}
DD/MM/YYYY HH:mm => ${formattedTime_3}`);

