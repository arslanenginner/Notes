
/*
                          **** NodeJS Work ****

1. user sent request to nodejs it add in queu and work as FIFO rule (first in first out).
2. Nodejs pick request from queu sent to event loop. 
3. The event loop validate that its blocking(Sync task) or Non-blocking(Async task) operation.

request ==> (event-Queu) ==> (event-loop)

==> if Non blocking (simple request) sent response to user.
==> if blocking request sent to thread pool and assign thread where it process request and sent respose to user.

By default 4 thread and if free thread are not avilable so request has to wait. 
So always we write Non blocking operation.

*/
const fs=require("fs");  //require package to work with file system
//   Blocking Operation   mean block other opertaion until it complete
console.log('its 1')

const result = fs.readFileSync('./file.txt', 'utf-8');
console.log(result)

console.log('its 2')
console.log('its 3')

console.log('------------------------------')

//   Non Blocking Operation  mean not block any other operation
console.log('its 1')

fs.readFile('./file.txt', 'utf-8', (error,data) =>{
    console.log(data);
} );

console.log('its 2')
console.log('its 3')



//    Default thread pool=4
//   if have 5 core so can only make 5 threads
//   if have 8 core so can only make 8 threads
const os=require("os");  //require package to work with operating system
console.log(os.cpus().length); // get number of cpu core