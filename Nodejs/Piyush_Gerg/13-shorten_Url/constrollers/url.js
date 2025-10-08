const shortid=require('shortid'); //get nanoid from nano-id

const url=require('../models/url')  //import the databse

async function handlegenerateshorturl(req,res) {

    const body=req.body;    //check url in req 
    if(!body.url) return res.status(400).json({error:"Url is requred"});

    const shortID=shortid();  //need to insert in db so importdb
  await url.create({
     shortid: shortID,  //save the id in database
     redirecturl: body.url,  //get redirect url from body.url
     visithistory:[],
    });
    return res.json({id:shortID});  //return shortid to user

} 
module.exports={  //export the object 
    handlegenerateshorturl,  //add the function
};