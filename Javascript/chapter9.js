/*
Stack and Heap memory:
premtive data types use stack memory and non-premtive use heap.in stack copy of var
will provide but in heap original value provided.


*/

//  Example of stack original remain same
let s1 = "ahsan";
let s2 = s1;
s1 = "yasir";
console.log([s1, s2]);

//  Example of Heap original will change for both
let userone = {
  email: "malware@gmail.com",
  id: "5",
};
let usertwo = userone;
usertwo.email = "attacker@gmail.com";

console.log([usertwo, userone]);

/*
String concating:

String.trim     remove spaces
.trimStart()    remove from start
.trimEnd()      remove from end
.slice         can be add -ve (-8,4)
.substring       only start from +ve (0,4)
.index           place of char in memory
.length          length of char
url.replace()    replace text
url.include()    is present
.split('a')      split base on a
*/

//  New Number define its always number
const score = 5;
const balance = new Number(4);
console.log([score, balance]);
console.log(balance.toString()); // convert to string
console.log(score.toFixed(2)); // provide result with 2 decimal
const num = 117.15;
console.log(num.toPrecision(3)); //work on 3 digital before and after decimal

//   Math Library:
console.log(Math.random());
console.log(Math.floor(4.3));
console.log(Math.round(4.5));
console.log(Math.ceil(4.7));
console.log(Math.floor(Math.random() * 10) + 1);
const max = 10;
const min = 5;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

/*
 Dates in js:
      
*/
let date = new Date();
console.log(date);
console.log(date.toDateString());
console.log(date.toLocaleString());
console.log(date.toString());
console.log(date.toLocaleDateString());

let mdate = new Date("2024,2,8");
console.log(mdate.toLocaleString());
