const mongoose = require("mongoose");

async function connecttomongodb(url){ //give url for connection
    return mongoose.connect(url);  //connect with mongoose
}

module.exports={ //export the connectmongodb function
    connecttomongodb,
}