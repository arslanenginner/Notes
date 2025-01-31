// funsctions
function developer() {
  console.log("Welcome to field of development");
  console.log("Welcome to Javascript series");
  console.log("Welcome to Apna college");
  console.log("Welcome to new journey");
}
developer();

// fun parameters are like local variables and have block scope
function calculator(a, b) {
  sum = a + b;
  console.log("The sum of number is: ", sum);
}
calculator(4, 6);

// Arrow function or modern
// const hello is var name and stored array function in this variable
const hello = (a, b) => {
  let mul = a * b;
  console.log("The product of number is: ", mul);
};
hello(6, 6);

// practice Question
// Input string and print vowels from string

const find_vowels = () => {
  let a = prompt("Enter a vowel :");
  let vowels = ["a", "e", "i", "o", "u"];
  console.log(a.length);
  for (const i of a) {
    console.log(i);
    for (const b of vowels) {
      console.log(b);
      if (i == b) {
        console.log("Vowel word is :", i);
      }
    }
  }
};
find_vowels();

// Method and function are two different so fun created by
//  user and not used with string or array but methods
//   are used with array or string to do something like arra.touppercase it is method

function abc() {
  console.log("Hello");
}
function xyz(abc) {
  return abc();
}

let array = ["arslan", "ahmad", "ali"];
array.forEach(function student(value) {
  // for each loop used to perform some task at different index of arrays
  // here use name of array then for each loop then function  name and then value of each array index in curly brackets
  // here we have pass call back fun in foreach loop but generally we did not use it
  console.log(value);
});

let arys = ["1", "2", "3"];
arys.forEach((value) => {
  // generally we pass arrow fun in for each loop and used when we want to do some wrk on array
  console.log(value);
});

let v = ["hello", "hy", "hi", "bye"];
//Array methods
// Map method similar to foreach loop but map return a new array
v.map((val) => {
  console.log(val);
});

let mm = ["hello", "hy", "hi", "bye"];
//Array methods
// Map method similar to foreach loop but map return a new array
let newarray = mm.map((val) => {
  return val;
});
console.log(newarray);

// Filter Method in Array
// it will filter even numbers
let arraynum = [1, 2, 3, 4, 5, 6, 7, 8];
let strarray = arraynum.filter((val) => {
  return val % 2 === 0;
});
console.log(val);

// reduce  Method use if we want just single value as output
let newarr = [1, 2, 3, 4, 5];
// it will work like this output=result(previous)+current_val(Next)
const output = newarr.reduce((result, current_val) => {
  return result + current_val;
});
console.log(output);

// reduce method to find out largest number
let newar = [1, 2, 3, 4, 5];
// it will work like this out=result(previous)>current_val(Next)
const out = newarr.reduce((res, current) => {
  return res > current ? res : current;
});
console.log(out);

//Practice Question
let marks = [45, 34, 78, 22, 99, 92, 89, 19, 90, 93];
marks.forEach((number) => {
  if (number >= 90) {
    console.log(number);
  }
});

//Practice Question
let std_marks = [45, 34, 78, 22, 99, 92, 89, 19, 90, 93];
topper_marks = std_marks.filter((num) => {
  return num >= 90;
});
console.log(topper_marks);

//Practice Question
let usr_marks = prompt("Enter a numebr : ");
let number;
let ary = [];
for (let index = usr_marks; index > 0; index--) {
  ary[index - 1] = index;
}
