// Arrays

let students = ["arslan", "ali", "ahmad", "anas", "ahad"];
console.log(students);
// array are mutable mean can be changed using index and string are immutable mean cannot be changed.

// Looping over arrays and priting array
// Iterable are items contain array,object and strings
// using for loop for array
var classes = ["chemistry", "cs", "IT", "physics", "botony", "bio-camp"];
for (let i = 1; i < classes.length; i++) {
  console.log(classes[i]);
}

let animals = ["lion", "elephant", "donkey", "dog", "fox"];
//using  for of loop for array
for (const x of animals) {
  console.log(x.toUpperCase());
}

// sum all marks of arrays and find average
let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
let avg;
for (let s = 1; s < marks.length; s++) {
  sum = sum + marks[s];
}
avg = sum / marks.length;
console.log("Average of marks is :", avg);

// here price of some items and have 30% sale so tell its original price
let original_price = [250, 645, 300, 900, 50];
for (let s = 0; s < original_price.length; s++) {
  let cal_price = (30 / 100) * original_price[s];
  let discount_price = original_price[s] - cal_price;
  console.log("Price of item after discount is :", discount_price);
}

// array methods

// create array and store data and do some changes
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(companies.shift("Bloomberg"));
console.log(companies.splice(2, 1, "Ola"));
console.log(companies.push("Amazon"));
console.log(companies);
