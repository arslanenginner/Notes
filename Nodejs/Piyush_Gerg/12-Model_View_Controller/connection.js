const mongoose = require('mongoose');     //require package mongoose


async function connectmongodb(url) {
    //Connecting Mongoose DB and providing DB name
 return mongoose.connect(url)

}
module.exports={
    //export the connecmongodb function
    connectmongodb,
}

