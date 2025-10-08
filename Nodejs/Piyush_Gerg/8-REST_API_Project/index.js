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
  .patch((req, res) => {
    // Updating Users
    return res.json({ status: "Pending" });
  })
  .delete((req, res) => {
    const id = Number(req.params.id);
    console.log(id);
    const index = users.findIndex((user) => user.id === id);
    if (index === -1) {
      return res.status(404).json({ error: "User not found" });
    }
    users.splice(index, 1); // Remove the user from the array

    // Write the updated users array back to the file
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: "Failed to write updated users to file" });
      }
      res.json({ message: `User with id ${id} deleted successfully` });
    });
  });

app.use(express.urlencoded({ extended: false }));   //middleware (add form/urlencoded data in body)
app.post("/api/users/", (req, res) => {
  const body = req.body;   //Req data coming from frontend  provide in body
  console.log("Body : ", body);  //checking data coming in body but undefined because express not know type of data so for this we will use middle ware  
  users.push({ ...body, id: users.length + 1 });   //append users in body
  fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
    return res.json({ status: "Pending" });
  });
});
// app.delete("/api/user/:id",(req,res)=>{
//   const id=Number(req.params.id);
//   console.log(id);
//   const user = users.find((user) => user.id === id); //Finding id in file and matching it
//   users.delete(user);

// });

app.listen(PORT, () => console.log(`server started at port : ${PORT}`));