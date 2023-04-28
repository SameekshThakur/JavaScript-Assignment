// Objective : To find the country Ehtopia in the countries list if it exists return "ETHIOPIA" else add in the country list.

const countries = ["india", "america", "england", "ethiopia", "germany", "switzerland"];
let target = "ethiopia";
let found = countries.includes(target);
if (found){
    console.log(target.toUpperCase());
}
else{
    countries.push(target);
    console.log(countries);
}
