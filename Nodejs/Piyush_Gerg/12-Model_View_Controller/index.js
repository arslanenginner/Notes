
// 1- connec mongodb
// 2- intilize middleware
// 3- intilize routes


const express = require('express');
// const users = require("./MOCK_DATA.json") //now fetching user from DB not from file

//require from connection mongodb
const { connectmongodb }=require('./connection')
//Pass the mongodb path
connectmongodb('mongodb://127.0.0.1:27017/youtubeapp');

const {logReqRes}=require('./middlewares')   //we will not provide filename because index file will also fetch from directory

// const { json } = require('stream/consumers');
// const { title } = require('process');
// const { ok } = require('assert');

const app=express();
const PORT = 8000;

 const userRouter=require('./routes/user');   //import the router
const { connect } = require('http2');
const { log } = require('console');

app.use(express.urlencoded({extended:false}));
app.use(logReqRes("log.txt"));      //call logReqRes and log everything in txt file

app.use('/user',userRouter); //if request on /user so use userRouter
app.listen(PORT, () => console.log(`server started at port : ${PORT}`));
