const input = require("fs").readFileSync(0).toString().trim().split("\n").slice(1);

const arr = [...new Set(input)].sort((a, b) => a.length - b.length || a.localeCompare(b));

console.log(arr.join("\n"));
