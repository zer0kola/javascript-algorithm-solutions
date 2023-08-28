/**
 * 나이순 정렬
 *
 * 사람들의 나이와 이름이 가입순으로 주어진다.
 * 나이가 증가하는 순으로,
 * 나이가 같으면 먼저 가입한 사람이 앞에 오는 순서로 정렬하라.
 */

const solution = (arr) => {
  arr.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });
  let answer = "";
  for (x of arr) answer += x[0] + " " + x[1] + "\n";
  return answer;
};

console.log(
  solution([
    [21, "Junkyu"],
    [21, "Dohyun"],
    [20, "Sunyoung"],
    [20, "Soojin"],
  ])
);
