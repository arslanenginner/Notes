
const fs = require("fs");     //for writing in data

function logReqRes(filename) {
    //provide a filename
  return (req, res, next) => {
  //use clause have access of req, res and next
    fs.appendFile(
      filename,
      `\n${Date.now()}:${req.ip}:${req.method}:${req.path}\n`,
      (err, data) => {
        next();
      }
    );
  };
}

module.exports={
    logReqRes,
}