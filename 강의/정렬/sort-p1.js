// 세수 정렬

const solution = (a, b, c) => {
  let arr = [a, b, c].sort((a, b) => a - b);
  return arr.join(" ");
};

console.log(solution(3, 1, 2));
