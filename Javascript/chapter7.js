// Attributes
//Access the class name of H1 tag
let tag_name = document.querySelector("h1");
let attr = tag_name.getAttribute("class");
console.log(attr);

// Set the attributes
// change the class name of H1 tag
let tg_name = document.querySelector("h1");
let atr = tg_name.setAttribute("class", "halo");
console.log(atr);

//  Style
let heading = document.querySelector("h1");
// Access the style of CSS
heading.style;
heading.style.backgroundColor = "red";
heading.style.fontSize = "35px";

// Insert  Elements
//To insert the element first we need to create it

// Append MEthod to append at last
let btn = document.createElement("button");
btn.innerText = "Click append";
console.log(btn);
heading.append(btn);

// Prepend Method to prepend at first
let btun = document.createElement("button");
btun.innerText = "Click Prepend";
console.log(btun);
heading.prepend(btun);

//Before Method to add before of Tag
let btuns = document.createElement("button");
btuns.innerText = "Click Before";
console.log(btuns);
heading.before(btuns);

// After Method to add at end of Tag
let btns = document.createElement("button");
btns.innerText = "Click after";
console.log(btns);
heading.after(btns);

//  Delete Methods
let rmv = document.querySelector(".hola");
console.log(rmv);
rmv.remove(rmv);

// explore it
AppendChild;
removechild;
