const input = require("fs").readFileSync(0).toString().trim().split("\n");

const N = +input[0];
const commands = input.slice(1);
const stack = [];
let result = [];

commands.forEach((command) => {
  if (command.startsWith("push")) {
    const [, num] = command.split(" ");
    stack.push(Number(num));
  } else if (command === "pop") {
    result.push(stack.length ? stack.pop() : -1);
  } else if (command === "size") {
    result.push(stack.length);
  } else if (command === "empty") {
    result.push(stack.length ? 0 : 1);
  } else if (command === "top") {
    result.push(stack.length ? stack[stack.length - 1] : -1);
  }
});

console.log(result.join("\n"));
