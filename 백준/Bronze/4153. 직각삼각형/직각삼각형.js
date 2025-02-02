const input = require("fs").readFileSync(0).toString().trim().split("\n");

input.forEach((item) => {
  const [a, b, c] = item.split(" ").map(Number);
  if (a === 0) return;

  const arr = [a, b, c].map((item) => Math.pow(item, 2)).sort((a, b) => b - a);

  if (arr[0] === arr[1] + arr[2]) console.log("right");
  else console.log("wrong");
});
