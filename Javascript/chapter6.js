// Window Object Model
// window is browser obj and created by browser not js
console.log(window); // console.log print things on screen
window.document; // print html page
console.dir(window.document); // console.dir special obj properties print like DOM

// Data Obect Model
// representation of HTML page
// when web page is loaded browser automatically created DOM
document.body; // access body

// DOM manupulation
document.body.childNodes[1]; // first node access
let id = document.getElementById("hyy");
console.log(id);
// access throught ID if ID not exist it shows NUll

let clas = document.getElementsByClassName(".hi");
console.log(clas);
// access through class name it return HTML collection if classs name not exist it shows empty HTML collection
// HTML collection is similar to array but a little different

let tagg = document.getElementsByTagName("h1");
console.log(tagg);
// access element by tag name

let first_element = document.querySelector(class_name, id_name, tag_name);
console.log(first_element);
// to pass class_name,tag or ID any kind of name and in quary selector class name is written with dot,tag with hash

let all_element = document.querySelectorAll(All.class_name, id_name, tag_name);
console.log(all_element);
// To access all classes,tag and ID name

// By these properties get,update and set the values
// Tag_name, innerTExt, innerHTML, innercontext
hi.tagname; // show thw tagname of that text
class_name.innertext; // just show text in tags
class_name.innerHTMl; // also show the tags and text
class_name.innercontext; // also show the hidden tags and text

// Nodes in DOM
// Text NodeList, Comment Nodes and Element Nodes. We always used element nodes

// Parent,Child and sibling
document.body.firstChild;
// access first child of body which is TExt node
document.body.lastChild;
// access last child of body
