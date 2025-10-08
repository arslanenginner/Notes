
const express=require('express');
const {handlegenerateshorturl}=require("../constrollers/url")  //import handlegenerateshorturl from constollers
const router=express.Router();

router.post('/',handlegenerateshorturl) //if req on / generate short url
//POST route created
module.exports=router;
