const express=require('express')
const app=express()
const port=3000
const fs = require("fs")

//    Add blog routes
const blog=require('./routes/blog')
app.use('/blog',blog)

// app.use(express.static('public'))      # By default middleware

// Middleware 1
app.use((req,res,next)=>{
    fs.writeFileSync('log.log',`request came at ${Date.now()} with method ${req.method}\n`)  // or log req in file
    req.number=" its 56 number"   //add number in request
    next()          //send to next middleware   
})

// Middleware 2
app.use((req,res,next)=>{
    console.log("Middleware 2")
    res.send('Its second middleware response')  // send the response and will not forward req next
    // next()      // if use res.send so remove next() otherwise show error

})

app.get('/',(req,res)=>{
    console.log("ITs home Page")
    res.send("Hi its home Page")
})
app.get('/about',(req,res)=>{
    console.log("ITs about Page")
    res.send("Hi its about Page")
})
app.get('/contact',(req,res)=>{
    console.log("ITs contact Page")
    res.send("Hi its contact Page")
})
app.get('/help',(req,res)=>{
    console.log("ITs help Page")
    res.send(`Hi its help Page with ${req.number}`)
})


app.listen(port,()=>{
    console.log(`Server is working on port ${port}`)
})