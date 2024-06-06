// const {a, b, add} = require("./file-2");
import {a, b} from './file-2-es.mjs';
import baser from './file-2-es.mjs';
// const {a: a3, b: b3, add: add3} = require("./file-3");
import {a as a3, b as b3, add as add3} from  './file-3-es.mjs'



// name Aliasing 
console.log(a, b,  baser(3,4))
console.log(a3, b3, add3(4, 5, 6));

