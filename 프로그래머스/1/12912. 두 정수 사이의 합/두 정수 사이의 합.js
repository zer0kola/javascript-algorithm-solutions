function solution(a, b) {
    let arr = a <= b ? [a, b] : [b, a]
    var answer = 0;
    for (let i = arr[0]; i <= arr[1]; i++ ) answer += i;
    return answer;
}