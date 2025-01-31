// Imedatily invoke fun expression IIFE to prevent from global scope pollution
(function chai() {
  console.log("Db connected");
})();
//semicaolon to tell invoke fun to stop

/*
jscode ==> Memory creation phase(only storage assigned) ==>Execution phase(store vars)
or
Global exection context(This) ==> Memory location ==> Execution(create and delete var enviroment for function)
Lifo will used (last in first out) if more then 1 fun call at same time

*/
// false values: 0,-0,bigin 0-n,"" ,NAN,NULL,undefined
// True values: "0","false:,[],{},function(){}," "

let val;
val = 4 ?? 10;
let val2 = null ?? 10; // if null then next value print
console.log(val);
console.log(val2);

/*For of loop just for array not for objects
 For in loop for array and objects map is not iteratable so for loop will not word
 For each is a  callback fun so it  has no name in function and have fun or arrow fun
 but not return value
*/

const array = ["Malwrae", "RootKit", "Solmon"];
array.forEach((element) => {
  console.log(element);
});
