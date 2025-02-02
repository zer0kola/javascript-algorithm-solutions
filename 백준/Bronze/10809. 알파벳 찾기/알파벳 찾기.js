const input = require("fs").readFileSync(0).toString().trim();

const arr = new Array(26).fill(-1);

for (let i = 0; i < input.length; i++) {
  const idx = input.charCodeAt(i) - 97;
  if (arr[idx] === -1) arr[idx] = i;
}

console.log(arr.join(" "));
