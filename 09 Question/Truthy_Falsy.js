
// Objective : Three JS statements which are truthy and falsy
"use strict";

let person1 = "Sameeksh Thakur";
let person1_age = 20;
let isLoggedIn_1 = true;
let coursePurchased_1 = ["FSJS 2.0"];
let elligible_certificate1 = coursePurchased_1.length>=1 ? true : false;
console.log(`Name : ${person1}
Age : ${person1_age}
Is he LoggedIn : ${isLoggedIn_1}
Joined any course : ${Array.isArray(coursePurchased_1)}
Elligible for Certificate : ${elligible_certificate1}
`);

let person2 = "John Doe";
let person2_age = 17;
let isLoggedIn_2 = false;
let coursePurchased_2 = 0;
let elligible_certificate2 = coursePurchased_2.length>=1 ? true : false;
console.log(`Name : ${person2}
Age : ${person2_age}
Is he LoggedIn : ${isLoggedIn_2}
Joined any course : ${Array.isArray(coursePurchased_2)}
Elligible for Certificate : ${elligible_certificate2}`);





 