const express = require('express');
const users = require("./MOCK_DATA.json")
const app = express();
const fs = require("fs");     //for writing in data
const { json } = require('stream/consumers');
const PORT = 8000;


//Routes
app.get('/api/user', (req, res) => {  //send data in json format
  return res.json(users);
});

// Middleware 1
app.use(express.urlencoded({ extended: false })); //middleware (add form/urlencoded data in body)

// Middleware 2
app.use((req, res, next) => {  //handler function
  //incoming req, use res to end res, next to send next middleware
  console.log("hello from middleware 1");
  req.myUsername = "Malware";  //do some changes with object
  next();     //call to next fun to send request next
});

app.use((req, res, next) => {
  fs.appendFile("./log.txt", `${Date.now()} : ${req.method} : ${req.path} :  Log saved\n`, (err, data) => {
    next();
  });

});

// Middleware 3
app.use((req, res, next) => {  //handler function
  //incoming req, use res to end res, next to send next middleware
  console.log("hello from middleware 2", req.myUsername); //also avilabe here
  next();     //call to next fun to send request next
  //db query credit card info   (we execute any code)
  //return res.end("Hey end it");  //end it when after displaying message
});

app.get('/user', (req, res) => {      //render HTMl page
  const html = `<ul>${users.map((user) => `<li>${user.first_name}</li>`).join("")}</ul>`
  res.send(html);
});

app
  .route("/api/user/:id")
  .get((req, res) => {
    const id = Number(req.params.id);   //fetching the id from req
    const user = users.find((user) => user.id === id); //Finding id in file and matching it
    return res.json(user);
  })

app.use(express.urlencoded({ extended: false }));
app.post("/api/users/", (req, res) => {
  const body = req.body;   //Req data coming from frontend  provide in body
  console.log("Body : ", body);  //checking data coming in body but undefined because express not know type of data so for this we will use middle ware  
  users.push({ ...body, id: users.length + 1 });   //append users in body
  fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
    return res.json({ status: "Pending" });
  });
});

app.listen(PORT, () => console.log(`server started at port : ${PORT}`));