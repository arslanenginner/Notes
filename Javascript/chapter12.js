document.getElementById("id").setAttribute("class", "Hello yello");
const title = document
  .getElementById("id")
  .setAttribute("class", "Hello yello");
console.log(title);
title.style.backgroundColor ='blue';

title.textcontent; // get all data
title.innerHTML; // show also HTML tags
title.innerText; // just show inner content

document.querySelector(".title");
document.querySelector('input[type="password"]');
document.querySelector("p:first-child");
//  for queryselector we can add arry or for each fun etc

const myul = document.querySelector("ul");
myul.style.padding = "10px";
myul.innerText="3"
myul[0].style.backgroundColor="blue"

const loop=document.querySelectorAll("ul")     
// for array we can use loop,for each and Map fun
loop.forEach (function (l){
    l.style.backgroundColor="pink"
})
//  In for each we add call back function


//  For Project => '/\' <=
console.log(parent.childern)             //class parent and its sub tags children
for (let index = 0; index < parent.childern.length; index++) {
  console.log(parent.childern[index].innerHTML);
}
parent.childern[1].style.backgroundColor="red";
console.log(parent.firsElementChild);
console.log(day.parentElement);               // parent of child
console.log(day.nextElementSibling);          //next brother of child

//  Add or append element using DOM
const adddiv=document.createElement('div')
console.log(adddiv);
adddiv.className="hlo"
div.setAttribute("title","game")         // add title such class or id
adddiv.id=Math.round( Math.random() *10+1);    // add random id
// adddiv.innerText="Add text g"     //first fetch data then Overwrite only save in memory not in program
const txt=document.createTextNode("chia aur code add g ")
adddiv.appendChild(txt)
//  use innertext or createtextnode
document.body.appendChild(adddiv)