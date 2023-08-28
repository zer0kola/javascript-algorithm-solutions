/**
 * 좌표 압축
 *
 * 수직선 위에 N개의 좌표 X1, X2, ..., XN이 있습니다.
 * 이 좌표에 좌표 압축을 적용하려 합니다.
 * Xi를 좌표 압축한 결과 X'i의 값은 Xi > Xj를 만족하는 서로 다른 좌표의 개수와 같습니다.
 *
 * 즉, X'i는 배열 안에 있는 모든 Xj 중에서 Xi보다 작은 수의 개수와 같습니다.
 *
 * 이 문제를 풀기 위해선
 * 1. 중복을 제거한 배열을 만든다.
 * 2. 중복을 제거한 배열을 정렬한다.
 * 3. 중복을 제거한 배열을 Map 객체에 넣는다.
 *   key: 중복을 제거한 배열의 값
 *  value: 중복을 제거한 배열의 인덱스
 * 이렇게 하면 정렬된 순서대로 인덱스가 부여되어 원래 배열의 값이 몇 번째로 작은지 알 수 있다.
 */

const solution = (arr) => {
  let uniq = [...new Set(arr)];
  uniq.sort((a, b) => a - b);

  let myMap = new Map();
  for (let i = 0; i < uniq.length; i++) {
    myMap.set(uniq[i], i);
  }
  let answer = "";
  for (x of arr) answer += myMap.get(x) + " ";
  return answer;
};

console.log(solution([2, 4, -10, 4, -9]));
