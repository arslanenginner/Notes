const express = require('express');
// const users = require("./MOCK_DATA.json") //now fetching user from DB not from file
const app = express();     //require package express
const mongoose = require('mongoose');     //require package mongoose
const fs = require("fs");     //for writing in data
const { json } = require('stream/consumers');
const { title } = require('process');
const { ok } = require('assert');
const PORT = 8000;

//Connecting Mongoose DB and providing DB name
mongoose.connect('mongodb://127.0.0.1:27017/youtubeapp').then(() => (
  console.log("MongoDB connected")
)).catch((err) => console.log("MongoDB error: ", err));

//creating schema
const userschema = new mongoose.Schema({
  firtName: {
    type: String,
    required: true,      //must required
  },
  lastName: {
    type: String,     //Not important
  },
  email: {
    type: String,
    required: true,
    unique: true,      //must require and unique
  },
  jobtitle: {
    type: String,
  },
  gender: {
    type: String,
  },

}, { timestamps: true } //add creation date
);

//Now creating Model
const User = mongoose.model('user', userschema);

//Routes
app.get('/api/user', async (req, res) => {  //send data in json format
  const alldbuser = await User.find({});  //fetch all users 
  //make request through postman or browser at /api/user fetch all data from users db.
  return res.json(alldbuser);
});

app.get('/user', async (req, res) => {      //render HTMl page
  const alldbuser = await User.find({});  //fetch all users 
  const html = `<ul>${alldbuser.map((user) => `<li>${user.firtName} - ${user.email} </li>`).join("")}</ul>` //map the username and email coming from alldbuser database
  res.send(html);  //send in HTML format
});

app
  .route("/api/user/:id")
  .get(async (req, res) => {
    //Now we will no find id ourself
    // const id = Number(req.params.id);   //fetching the id from req
    // const user = users.find((user) => user.id === id); //Finding id in file and matching it

    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: `User not found with ID : ${id}` });
    return res.status(200).json(user);
  })

  .patch(async (req, res) => {
    // Updating Users
    await User.findByIdAndUpdate(req.params.id, { lastName: 'add_lastname' });
    // const updated=req.body.firtName(firtName).lastName(lastName).email(email);

    return res.json({ status: "success" }).status(200, 'ok');
  })

  .delete(async (req, res) => {

    //you can delte user in  two ways to delete User
    //method-1
    await User.findByIdAndDelete(req.params.id)
    res.status(201).json({ msg: "User deleted" });


    //method-2         only work when you use Mock_Data.json file not WORK with Mongodb 
    // const id = Number(req.params.id);
    // console.log(id);
    // const index = users.findIndex((user) => user.id === id);
    // if (index === -1) {
    //   return res.status(404).json({ error: "User not found" });
    // }
    // users.splice(index, 1); // Remove the user from the array

    // // Write the updated users array back to the file
    // fs.writeFile('./MOCK_DATA.json', JSON.stringify(users, null, 2), (err) => {
    //   if (err) {
    //     return res.status(500).json({ error: "Failed to write updated users to file" });
    //   }
    //   res.status(200).json({ message: `User with id ${id} deleted successfully` });
    // });
  });

app.use(express.urlencoded({ extended: false }));   //middleware (add form/urlencoded data in body)

//change req,res from sync to Async to push in MongoDB
app.post("/api/users/", async (req, res) => {
  const body = req.body;   //Req data coming from frontend  provide in body
  //Async define we will use await inside code to resolve promise
  if (!body || !body.first_name || !body.email || !body.gender || !body.Title || !body.last_name) {
    return res.status(400).json({ Message: "All fields are required" });
  }
  console.log("Body : ", body);  //checking data coming in body but undefined because express not know type of data so for this we will use middle ware  

  //Now we will not puch code to file push to MongoDB
  // users.push({ ...body, id: users.length + 1 });   //append users in body
  // fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
  //   return res.status(200).json({ status: "Done" });  //add 200 status code
  // });

  const result = await User.create({  //return the created user in result if not use await user still created but not show in terminal and await will wait until promise not provide output (error/Data)
    firtName: body.first_name, //provide name and other data
    lastName: body.lastName,
    email: body.email,
    gender: body.gender,
    jobtitle: body.Title,
  });
  console.log(result)     //show result
  return res.json({ msg: "User created" }).status(201);   //give msg and 201 code when user created
});
// app.delete("/api/user/:id",(req,res)=>{
//   const id=Number(req.params.id);
//   console.log(id);
//   const user = users.find((user) => user.id === id); //Finding id in file and matching it
//   users.delete(user);

// });
app.listen(PORT, () => console.log(`server started at port : ${PORT}`));