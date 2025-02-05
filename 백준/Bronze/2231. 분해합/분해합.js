const input = require("fs").readFileSync(0).toString().trim().split("\n").map(Number)[0];

let answer = 0;

for (let i = 1; i < input; i++) {
  if (
    i +
      String(i)
        .split("")
        .map(Number)
        .reduce((acc, cur) => acc + cur, 0) ===
    input
  ) {
    answer = i;
    break;
  }
}

console.log(answer);