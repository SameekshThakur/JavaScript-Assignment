// Objective : To perform some operations on the stu_ages array
"use strict";


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// - Sort the array and find the min and max age
ages.sort(function (a,b) {return a-b});
let min_val = ages[0];
let max_val = ages[ages.length - 1];
console.log(`Student ages in sorted order : ${ages}`);
console.log(`Minimum age of a Student : ${min_val}`);
console.log(`Maximum age of a Student : ${max_val}`);


// - Find the median age(one middle item or two middle items divided by two)
function getMedian(age){
    let median = 0;
    let mid = 0;
    let size = age.length;
    if(size%2 == 0){
        mid = (size/2)-1;
        median = (age[mid] + age[mid+1])/2;
        return median;
    }
    else{
        mid = Math.floor((size/2));
        median = age[mid];
        return median;
    }
}
let medAge = getMedian(ages);
console.log(`Median age of student : ${medAge}`);

// - Find the average age(all items divided by number of items)
function getAverage(age){
    let sum = 0;
    for(let i = 0; i < age.length; i++) {
        sum+=age[i];
    };
    const avg_age = sum / age.length;
    return avg_age;
};
let avgAge = getAverage(ages);
console.log(`Average age of Student: ${avgAge}`);


// - Range of the ages
const rangeOfAge = max_val - min_val;
console.log(`Range of Student Ages: ${rangeOfAge}`);


// - Compare the value of (min - average) and (max - average), use abs() method
const compMin = min_val - avgAge;
const compMax = max_val - avgAge;
const compAge = Math.abs(compMin, compMax);
console.log(`Compare of 'compMin' and 'compMax' : ${Math.round(compAge, 1)}`);
