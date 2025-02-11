const input = require("fs").readFileSync(0).toString().trim().split("\n");

const N = +input[0];
const list = input[1].split(" ").map(Number);
const [T, P] = input[2].split(" ").map(Number);

console.log(
  list.reduce((acc, cur) => {
    if (cur === 0) return acc;
    else {
      return acc + Math.ceil(cur / T);
    }
  }, 0)
);

console.log([Math.trunc(N / P), N % P].join(" "));
