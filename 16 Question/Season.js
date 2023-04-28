// Objective : To check for the season according to the month entered
"use strict";

const prompt = require('prompt-sync')({sigintok : true});
let month = prompt(`Enter the month (in title case) : `);

function getSeason(value) {
    switch (value) {
        case "January" || "February" || "December" :
            console.log("Winter Season");
            break;
        
        case "March" || "April" || "May" :
            console.log("Spring Season");
            break;
        
        case "June" || "July" || "August" :
            console.log("Summer Season");
            break;
        
        case "September" || "October" || "November" :
            console.log("Autumn Season");
            break;
    
        default:
            console.log("Please enter valid input as Suggested.");
        
    }

};

getSeason(month);
