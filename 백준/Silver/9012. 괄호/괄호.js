const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((item) => item.split(""));

const answer = [];

input.forEach((item) => {
  const arr = [];
  let result = true;
  for (let i = 0; i < item.length; i++) {
    if (!arr.length && item[i] === ")") result = false;
    else if (item[i] === "(") arr.push(0);
    else arr.pop();
  }
  if (result && !arr.length) answer.push("YES");
  else answer.push("NO");
});

console.log(answer.join("\n"));
