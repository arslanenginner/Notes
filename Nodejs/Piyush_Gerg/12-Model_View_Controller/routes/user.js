const express = require('express');
const router =express.Router();          //creater seprate router 

const {handlergetalluser, handlergetuserbyid, handlerpatchuserbyid, handlerdeleteuserbyid, handlercreatenewuserbyid}=require('../controllers/user');  //import the modules

// if we  index.js userRouter so it route to /user and this will at /user/handlhandlegetalluser
router.route("/").get(handlergetalluser).post(handlercreatenewuserbyid);  //create group for get and post request 


//Routes / mean now /user/:id 
//Now we will reroute this getuserby id
router
  .route("/:id")
  .get(handlergetuserbyid)        //get users by id
  .patch(handlerpatchuserbyid)   //updating users
  .delete(handlerdeleteuserbyid); //delete users

module.exports=router;    