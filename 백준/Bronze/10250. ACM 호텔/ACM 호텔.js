const input = require("fs").readFileSync(0).toString().trim().split("\n");

const t = Number(input[0]);

for (let i = 0; i < t; i++) {
  const [h, w, n] = input[i + 1].split(" ");
  const front = ((+n - 1) % +h) + 1;
  const back = `0${Math.floor((+n - 1) / +h) + 1}`.slice(-2);
  console.log(front + back);
}
