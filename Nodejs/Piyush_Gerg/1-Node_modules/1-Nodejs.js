/*
==> Js use built in engine to run his code in browser and chromium browsers used google V8 engine. so its were impossible to run js outside browser so creater use ==> V8 engine add with C++ engine and create nodejs engine to run js out of browser.

==> Odd version mean beta and even mean long term support.
==> Nodejs run server side so DOM (window side objects) has been removed and only server side core fun avilable.
*/
/*
Mudular programing mean spliting your program into small modules so we can create new files for our math functions*/
console.log('Hello its malware')


const math = require('./math.js'); // import math.js package and only avilabe in nodejs not in js
console.log(math.addFn(2, 5),math.subFn(5,5)); // call add function from math.js
console.log(math.mulFn(7, 5)); // call add function from math.js
// console.log(add(2,5));