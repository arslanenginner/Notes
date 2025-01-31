//  Events in js

// Mouse Events
// Keyboard Events
// Form Events
// Print and other Events

// Event can be handle inline(in html file) or in javascript file
// if we handle the event in js and also in html so only js event will run and also one event can apply on one Tag

let btn1 = document.querySelector("#btn1");
btn1.onclick = () => {
  console.log("btn was clicked");
  let a = 25;
  a++;
  console.log(a);
};

let div = document.querySelector(".box");
div.onmouseover = () => {
  console.log("You are inside div");
};

// Event Object
// special obj that have detail about event

let ev_obj = document.querySelector(".hlo");
ev_obj.onclick = (evt) => {
  console.log(evt);
  // print detail about event
  console.log(evt.target);
  // on which tag event applied
  console.log(evt.type);
  // what type of event applied
  console.log(evt.clientX, evt.clientY);
  // On what position event applied
};

//   Eventy Listners

//  for one Event we can create multiple event listners and musltiple work can be done by using same event listner
// Node.addeventlistner(event,callback)
// callback is fun that pass as argument in other function and it also called event handler
let evnt = document.querySelector(".hlo");
evnt.addEventListener("click", (obj) => {
  console.log("Button one was clicked");
  console.log(obj);
  console.log(obj.target);
  console.log(obj.type);
  console.log(obj.clientX, obj.clientY);
});

evnt.addEventListener("click", () => {
  console.log("Button 2 one was clicked ");
});

// store in variable
const handler_3 = () => {
  console.log("Button 3 one was clicked");
};
evnt.addEventListener("click", handler_3);

// If we want to remove the event handler so we should first save it in variable
evnt.removeEventListener("click", handler_3);
