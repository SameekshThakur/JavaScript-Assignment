
// Objective : To print the pattern based on the no. of input given
// input = 3
/*

*
**
***

*/

const prompt = require(`prompt-sync`)({sigintok: true});
let num = prompt("Enter the no. of times you want the triangular pattern : ");

function TrianglePattern(num){
    for(let i = 1; i<=num; i++){
        let row = '';
        for(let j = 1; j<=i; j++){
            row+='*';
        }
        console.log(row);
    }
}

TrianglePattern(num);