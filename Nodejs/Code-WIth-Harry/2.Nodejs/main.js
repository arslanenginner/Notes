
//      use npm init -y       to intilize

const fs=require('fs')

fs.writeFile('fileasyc',"Its me asyc wala malware",()={
    console.log("Write file DOne")
})
// Callback Require (path,data,callback)
fs.appendFile('file','Hello its me malware',(e,d)=>{
    console.log(d,toString())
})