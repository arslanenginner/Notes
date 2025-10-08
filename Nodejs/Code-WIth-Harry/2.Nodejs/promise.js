
//Async fun always return a promise  (.then) and we can create any fun a async then await the promise in  it

// callback is a fun pass as arg to another fun, which is then invoked inside that fun after some OP finish.
// Await pause execution of Async until promise resolved
import fs from 'fs/promises'
let a= await fs.readFile('file.txt') //can do await with out sync
console.log(a.toString())


import path from 'path'
console.log(path)
let my_path='c:\\malware\\Desktop\\Nodejs\\file.txt' // add specific path
console.log(path.extname(my_path))  //provide extension 
console.log(path.dirname)      // provide directory name where file exist