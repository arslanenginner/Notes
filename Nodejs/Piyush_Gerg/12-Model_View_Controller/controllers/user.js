
const { model } = require("mongoose");
const user = require("../models/user");

// for returning all Users
async function handlergetalluser(req, res) {
  const alldbuser = await User.find({}); //fetch all users
  //make request through postman or browser at /api/user fetch all data from users db.
  return res.json(alldbuser);
}

//for returning Userby id
async function handlergetuserbyid(req, res) {
  const user = await User.findById(req.params.id);
  if (!user)
    return res.status(404).json({ error: `User not found with ID : ${id}` });
  return res.status(200).json(user);
}

// for patch request
async function handlerpatchuserbyid(req, res) {
  await User.findByIdAndUpdate(req.params.id, { lastName: "add_lastname" });
  return res.json({ status: "success" }).status(200, "ok");
}

async function handlerdeleteuserbyid(req, res) {
  await User.findByIdAndDelete(req.params.id);
  res.status(201).json({ msg: "User deleted" });
}

async function handlercreatenewuserbyid(req, res) {
  const body = req.body; //Req data coming from frontend  provide in body
  //Async define we will use await inside code to resolve promise
  if (
    !body ||
    !body.first_name ||
    !body.email ||
    !body.gender ||
    !body.Title ||
    !body.last_name
  ) {
    return res.status(400).json({ Message: "All fields are required" });
  }
  console.log("Body : ", body); //checking data coming in body but undefined because express not know type of data so for this we will use middle ware

  const result = await User.create({
    //return the created user in result if not use await user still created but not show in terminal and await will wait until promise not provide output (error/Data)
    firtName: body.first_name, //provide name and other data
    lastName: body.lastName,
    email: body.email,
    gender: body.gender,
    jobtitle: body.Title,
  });
  console.log(result); //show result
  return res.json({ msg: "User created", id:result._id }).status(201); //give msg and 201 code when user created
}

module.exports = {
  handlergetalluser,
  handlergetuserbyid,
  handlerpatchuserbyid,
  handlerdeleteuserbyid,
  handlercreatenewuserbyid,
};
