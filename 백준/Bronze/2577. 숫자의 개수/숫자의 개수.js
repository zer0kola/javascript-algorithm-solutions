const input = require("fs").readFileSync(0).toString().trim().split("\n").map(Number);

const [a, b, c] = input;

const arr = String(a * b * c)
  .split("")
  .map(Number);

for (i = 0; i < 10; i++) {
  console.log(arr.filter((item) => item === i).length);
}
