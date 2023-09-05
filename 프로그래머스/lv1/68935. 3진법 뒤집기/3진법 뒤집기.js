function solution(n) {
    // toString 매개변수를 넣으면 n진수로 반환한다
    // parseInt의 두번째 매개변수를 넣으면 n진수를 10진수로 반환한다.
    return parseInt(n.toString(3).split('').reverse().join(''), 3);
}