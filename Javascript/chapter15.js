/*

XMLHttpRequest:
In past before fetch api used XMLHttpRequest method to send and receive data. 
UNSENT                   not sent
OPEN                     ready to send but not called
Header Receive           header and status avilabe
Loading                  request text hold data
Done

*/

const url="https://google.com"
const xhr=new XMLHttpRequest()
xhr.open('GET',url)
xhr.onreadystatechange=function(){
    console.log(xhr.readyState);
}
xhr.send 

/*

Promises
An obj represent eventually completion.

When a function is declared as async, it automatically returns a Promise, and you can use await inside that 
function to handle promises.

await is used inside an async function to pause the execution until a promise is resolved or rejected. It 
makes asynchronous code look and behave more like synchronous code, which is easier to read and maintain.

 */

const Promises=new Promise(function(resolve,reject){
    setTimeout(function(){
       console.log("Asyn working") 
     resolve()
    },1000)
})
Promises.then(function(){
    console.log("Promise consumed")
})