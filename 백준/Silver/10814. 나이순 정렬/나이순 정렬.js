const input = require("fs").readFileSync(0).toString().trim().split("\n").slice(1);

const points = input
  .map((item) => {
    const [age, name] = item.split(" ");
    return {
      age,
      name,
    };
  })
  .sort((a, b) => a.age - b.age)
  .map((item) => `${item.age} ${item.name}`)
  .join("\n");

console.log(points);
