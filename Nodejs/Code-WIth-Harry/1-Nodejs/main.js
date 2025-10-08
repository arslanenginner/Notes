/*  
import { createServer } from 'node:http';
// const fs=require('fs')  // Old way as (CommonJs) import as  Sync(blocking code)

import http from http   //New way to import as (EcmaScript) (after use module we can't use require)
// type:'module'   (in pkg.json)  modern way to import modules 


import {obj_val} from "./content.js"  //defaul obj can be imported by anyname
import { type } from 'node:os';
console.log(obj_val)

*/

// const a = require('./content2.js')
// console.log(a)



// run with `node server.mjs`
import object from "./content.js"
console.log(object)