const input = require("fs").readFileSync(0).toString().trim().split("\n");

const r = BigInt(31);
const M = BigInt(1234567891);
const arr = input[1].split("").map((item) => BigInt(item.charCodeAt() - 96));

let hash = BigInt(0);
let rPower = BigInt(1);

for (let i = 0; i < arr.length; i++) {
  hash = (hash + arr[i] * rPower) % M;
  rPower = (rPower * r) % M;
}

console.log(hash.toString());
