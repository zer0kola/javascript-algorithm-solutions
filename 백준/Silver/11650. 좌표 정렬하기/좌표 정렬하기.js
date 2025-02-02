const input = require("fs").readFileSync(0).toString().trim().split("\n").slice(1);

const points = input
  .map((item) => {
    const [x, y] = item.split(" ").map(Number);
    return {
      x,
      y,
    };
  })
  .sort((a, b) => a.x - b.x || a.y - b.y)
  .map((item) => `${item.x} ${item.y}`)
  .join("\n");

console.log(points);
