// Objective : to create three js files with different names and call the other two in one of the js files

"use strict";

const countries = require("./countries.js");
let cntries = countries.cntry();
console.log("List of countries :");
console.log(cntries);

console.log();

const web_techs = require("./web_techs.js");
let web_tech = web_techs.web_tech();
console.log("Latest Web Tehcnologies :");
console.log(web_tech);