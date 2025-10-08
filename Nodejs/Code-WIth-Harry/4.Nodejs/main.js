const express = require("express");
const blog=require('./routes/blog');  //add the blog.js file location
const shop=require('./routes/shop')

const app = express();
const port = 3000;

app.use(express.static("public"))     // Testing the POST req by creating page.html in public 
app.use('/blog',blog)         //endpoint start with /blog handle by boog.js 
app.use('/shop',shop)

// Chaning the endpoints
app.get("/", (req, res) => {
  console.log("GET Req");
  res.send("Hello its GET req and its me malware");
}).post("/", (req, res) => {         //chain the endpoints
  console.log("post Req");
  res.send("hello its POST req");
}).put("/", (req, res) => {
  console.log("post Req");          //chain the endpoints
  res.send("hello its POST req");
});

//Serving Another endpoint
app.get("/index", (req, res) => {         //index endpoints
  res.send("Hi its another index endpoints");
});

// Serving HTML templates
app.get("/page", (req, res) => {         //renderhtml page
  // add path or root (root return project main directory )
  res.sendFile('templates/index.html',{root:__dirname}); 
});

// Return json data on API endpoints
app.get('/api',(req,res)=>{
  res.json({a:1,b:2,c:3,d:4, name:["malware"],class:["IT"],semester:["7th"]})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
