
const express=require('express');
const  urlroute=require('./routes/url');
const {connecttomongodb} = require('./connectmogoose');


const app=express();   //create express app
app.use('/url',urlroute); //anything start with url use this urlroute
const port=8000;

connecttomongodb('mongodb://localhost:27017/shorturl').then(()=> console.log("Connected to MongoDb"));

app.listen(port,() => console.log(`Server started at port: ${port}`));
