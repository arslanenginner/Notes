
const express = require('express')
const app=express()
const port = 3000


app.get('/',(req,res)=>{
    let sitename="Adidas"
    let searchText='Search Now'
    res.render('index.ejs',{sitename:sitename,searchText:searchText})
})

app.get('/blog:slug',(req,res)=>{
    let blogtitle="Adidas Brand"
    let blogcontent='This is one of popular brands'
    res.render('index.ejs',{blogtitle:blogtitle,blogcontent:blogcontent}) //pass the blog title and blog content 
})

 
app.listen(port,()=>{
    console.log(`THis server is running on port ${port}`)
})