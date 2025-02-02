const input = require("fs").readFileSync(0).toString().trim().split("\n");

const [a, b, c] = input;

console.log(Number(a) + Number(b) - Number(c));
console.log(Number(a + b) - Number(c));