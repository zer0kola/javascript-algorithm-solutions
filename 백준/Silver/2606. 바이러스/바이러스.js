const input = require("fs").readFileSync(0).toString().trim().split("\n").slice(2);

const adjList = {};
input.forEach((line) => {
  const [from, to] = line.split(" ").map(Number);

  if (!adjList[from]) adjList[from] = [];
  if (!adjList[to]) adjList[to] = []; // 양방향을 위해 필요

  adjList[from].push(to);
  adjList[to].push(from); // 양방향 추가
});

const visited = new Set();
const toVisit = [1];
const visitOrder = [];

while (toVisit.length) {
  const currentNode = toVisit.pop();

  if (!visited.has(currentNode)) {
    visited.add(currentNode);
    visitOrder.push(currentNode);

    if (adjList[currentNode]) {
      toVisit.push(...adjList[currentNode]); // 연결된 노드 추가
    }
  }
}

console.log(visited.size - 1);
