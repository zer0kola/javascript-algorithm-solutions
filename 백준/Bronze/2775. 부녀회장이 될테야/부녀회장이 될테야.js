const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map(Number);

const points = input.reduce((acc, cur, index) => {
  if (index % 2 === 0) acc.push([cur, input[index + 1]]);
  return acc;
}, []);

const apt = Array.from({ length: 15 }, () => Array(15).fill(0));
apt[0] = Array.from({ length: 15 }, (_, index) => index + 1);

for (let i = 1; i < 15; i++) {
  for (let j = 0; j < 15; j++) {
    if (j === 0) apt[i][j] = 1;
    // 아래층 같은 호수 + 이전 호수
    else apt[i][j] = apt[i - 1][j] + apt[i][j - 1];
  }
}

points.forEach(([x, y]) => {
  console.log(apt[x][y - 1]);
});