function add(a,b)
{
    return a+b;
}
function sub(a,b){
 return a-b;
}
function mul(a,b){
  return a*b;
 }
// exports.mul =(a,b) => a*b; //instead of above fun we can use  arrow function can be used multiple times

// module.exports = {add,sub,mul}; // export add function so it can be used in other files but this will replace values
module.exports={ //only used one time
    addFn:add,
    subFn:sub,
    mulFn:mul  //we can also use without addFn 
} // so we can use this js objetc to return multiple things

