// Objective to create an Array of Prime Numbers from 0 to 100

"use strict";

function PrimeArray(a, b){
    let prmArray = new Array();
    
    while(a<=b){
      let count = 0;
      if(a>=2){
        for(let i = 2; i <= Math.sqrt(a); i++) {
          if(a % i === 0){
            count = 1;
            break;
          } 
        }
        if(count===0){
          prmArray.push(a);
        }
      }
      a+=1;
    }
    return prmArray;
}

console.log(PrimeArray(0, 100));