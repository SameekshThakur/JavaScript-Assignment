// Objective : To remove any trailing whitespace at the beggining and end of a string value
"use strict";

const fruits = "      Apple, Guava                  ";
const fruitsTrim = fruits.trim();
console.log(`String with whitespace : ${fruits}
Srting after using trim() : ${fruitsTrim}`);