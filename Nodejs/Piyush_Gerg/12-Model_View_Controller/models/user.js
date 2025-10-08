
const mongoose = require('mongoose');     //require package mongoose

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
module.exports=User;

