function solution(a, b, c, d) {
  var answer = 0;
  const set = new Set([a, b, c, d]);
  if (set.size === 1) answer = 1111 * a;
  else if (set.size === 2) {
    if (a === b && b === c) answer = Math.pow(10 * a + d, 2);
    else if (a === b && b === d) answer = Math.pow(10 * a + c, 2);
    else if (a === c && c === d) answer = Math.pow(10 * a + b, 2);
    else if (b === c && c === d) answer = Math.pow(10 * b + a, 2);
    else if (a === b) answer = (a + c) * Math.abs(a - c);
    else if (a === c) answer = (a + b) * Math.abs(a - b);
    else if (a === d) answer = (a + b) * Math.abs(a - b);
    else if (b === c) answer = (b + a) * Math.abs(b - a);
    else if (b === d) answer = (b + a) * Math.abs(b - a);
    else if (c === d) answer = (c + a) * Math.abs(c - a);
  } else if (set.size === 3) {
    if (a === b) answer = c * d;
    else if (a === c) answer = b * d;
    else if (a === d) answer = b * c;
    else if (b === c) answer = a * d;
    else if (b === d) answer = a * c;
    else if (c === d) answer = a * b;
  } else answer = Math.min(a, b, c, d);
  return answer;
}