const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .filter((item) => item !== "");

console.log(input.length);