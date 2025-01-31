/*
Arrays:
array create shallow copy of object share same reference and deep copy mean crate
a another copy and changs are done in copy.

*/

const array = [1, 5, 8, 9, 6];
console.log(array[2]);
console.log(array.push(4)); // add at last
console.log(array.pop()); // last will remove
console.log(array.unshift(0)); // add at start
console.log(array.shift()); // remove from start
console.log(array.includes(9)); //value present
console.log(array.slice(0, 4)); // show not remove
console.log(array);
console.log(array.splice(0, 4)); // also remove from array
console.log(array);

const country = ["india", "pakistan", "America", "Phalestine"];
console.log(country);
const newcountry = ["china", "Russia", "England", "Norway"];
console.log(country.concat(newcountry)); // use only for two var

const spreadcountry = ["Newzland", "Canada", "Bangladash", "Norway"]; //spread use for multiple
const allcountry = [...country, ...newcountry, ...spreadcountry];
console.log(allcountry);

console.log(Array.isArray("Arslan"));
console.log(Array.from("Arslan")); //convert to array
console.log(Array.from({ name: "Arslan" })); //but not conver to var

// convert var to array
let s1 = 400;
let s2 = 500;
let s3 = 200;

console.log(Array.of(s1, s2, s3));
console.log(s1);

// Object is Js

const user = {
  fullname: {
    username: {
      firstname: "Ali",
      lastname: "Ahsan",
    },
  },
};
console.log(user.fullname.username["firstname"]);
console.log(user.fullname.username.lastname);

// Function in js
//Add Num
function addnum(n1, n2) {
  let n3 = n1 + n2;
  return n3;
}
console.log(addnum(4, 5));

//Mul Num
function mult(m1, m2) {
  let m3 = m1 * m2;
  return m3;
}
let m3 = mult(4, 3);
console.log(m3);

/*For multiple value in single parameter use rest/spread
 operator to add this in array */
function calcart(...c1) {
  return c1;
}
console.log(calcart(200, 400));

//Pass obj in fun
//when use this mean talking about current scope/content of var
const sword = {
  name: "Katana",
  price: "5000",
};
function buy(product) {
  return `${product.name} is the world one of best sword whose price is ${product.price}pkr.`;
}
console.log(buy(sword));

// Arrow fun
const twonum = (a1, a2) => {
  return a1 + a2;
};
console.log(twonum(4, 4));

//Another way for arrow fun
const no = (b1, b2) => a1 + a2;
console.log(twonum(7, 3));
