const input = require("fs").readFileSync(0).toString().trim().split("\n");
const [a, b, v] = input[0].split(" ").map(Number);

console.log(Math.ceil((v - b) / (a - b)));
