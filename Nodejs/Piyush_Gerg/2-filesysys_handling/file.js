const fs=require("fs");
//Synchronous file write
fs.writeFileSync("file1.txt","Hello World Sync");

//Asynchronous file write
fs.writeFile("file2.txt","Hello World Async",(err) => {})

//Sync add result in variable
const contacts = fs.readFileSync("./contact.txt","utf-8")
console.log(contacts)

//Async not return result in variable and expect callback function for error and result
fs.readFile("./contact.txt","utf-8",(err,data) => {
    if(err) {
        console.log(err);
    } else {
        console.log("\nAsyc Data\n",data);
    }
})

//Append data in file synchronously 
fs.appendFileSync("./file1.txt",`Hi here\n`);
fs.appendFileSync("./file1.txt",new Date().getDate().toLocaleString())

fs.cpSync("./file1.txt","./copy1.txt",{force:true}) //copy file and create new one 

fs.unlinkSync("./copy1.txt") //delete the copied file 

// const stats = fs.statSync("./file1.txt") //get file stats
// console.log(stats)