const mod = require("./mod");
console.log("This is a index.js");

console.log("This is for average");
console.log(`Average=${mod.avg([10,20,30])}`);

console.log("This is for even number between two numbers");
let prime = mod.prime(1, 100);
console.log(prime);

console.log(`Prime=${mod.prime(1,100)}`);