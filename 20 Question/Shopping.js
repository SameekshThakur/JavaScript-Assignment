// Objective : To modify the elements in the shopping cart (removing, updating, adding)
"use strict";

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

shoppingCart.unshift('Meat');  // adding "Meat" at the beggining

shoppingCart.push("Sugar");    // adding "Sugar" at the end

shoppingCart.splice(4,1);      // remove "Honey"

shoppingCart.splice(3,1,"Green Tea");   // upadate "Tea" to "Green tea"

console.log(shoppingCart);
