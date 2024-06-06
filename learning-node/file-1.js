const {a, b, add} = require("./file-2");
const {a: a3, b: b3, add: add3} = require("./file-3");
// name Aliasing 
console.log(a, b, add(2, 4));
console.log(a3, b3, add3(4, 5,6));

