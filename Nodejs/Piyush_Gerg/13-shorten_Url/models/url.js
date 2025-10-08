const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  shortid: {
    //short id attributes
    type: String,
    required: true,
    unique: true,
  },
  redirecturl: {
    //original url attributes
    type: String, //unique not necessary
    required: true,
  },
  visithistory: [{ 
    timestamp: { 
        type: Number //timestamp type number
    } 
}], //visithistory is array that have objects and object have array of objects
},{timestamps:true}
);

const URL=mongoose.model('url',urlSchema) //pass url schema in url
module.exports=URL;