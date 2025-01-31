/*
Event propogation two types

event bubbeling      flase (inner to outside event execute )
event capturing      True (use preventdefault  only execute inner)

event.target
event.tagname

*/


/*

default js behavious 
synchrnous        (execute one by one)
single threaded

Block Vs Non-block

==> Block
block flow of other program until one execute
Read file sync

==> Non-block
Not block program flow
Read file and also change something Async
*/

/*
Set Timeout      only do onece
set Interval     repeat after time
clear Timeout    remove settimeout

*/

setTimeout(function(){
    console.log("hello")
},2000) 

const stopintvl=setInterval(() => {
    console.log("Yr")
}, 3000);

const changetext=function(){
    document.querySelector("h1").innerHTML="Working on my goals"
}

const stoptime=setTimeout(changetext,2000)
clearTimeout(stoptime)          // stop timeout before executed

// timeout clear when click on button
document.querySelector("#stop").addEventListener("click",function(){
 clearTimeout(stoptime)
})

clearInterval(stopintvl)          //clear the interval

