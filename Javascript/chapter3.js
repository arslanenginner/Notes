// for loop
for (let index = 0; index < array.length; index++) {
  const element = array[index];
}

// while loop
while (condition) {}

// do while loop
do {} while (condition);

let b = "string";
// for of loop  used for obj,string and arrays

for (const i of b) {
  // here const is variable type ,iterator(i) is varable name  and object(b) is string variable
  console.log(i);
}

let student = {
  name: "ali",
  age: 20,
  roon_no: 6635,
  is_padd: true,
};
// for in loop for keys of object
for (const i in student) {
  // here const is var type,key(i) is keys of obj and student is object name
  console.log("Key:", i, "value:", student[i]);
  // want to find keys os values so use   obj_name[key]
}

// print even number from 0 to 100
for (let a = 0; a <= 100; a++) {
  if (a % 2 == 0) {
    console.log(a, "is Even");
  }
}

// User guess a number
let game_num = 25;
let user_num = prompt("Guess a number :");
while (user_num != game_num) {
  console.log("You guess correct number");
}

// Tempplate literals
// $[``]

// string methods
// length,concat and index etc

//get name from user and create user-name
let user_name = prompt("Enter you name without spaces:");
let name_length = user_name.length;
let symbol = "@";
console.log(symbol.concat(user_name).concat(name_length));
