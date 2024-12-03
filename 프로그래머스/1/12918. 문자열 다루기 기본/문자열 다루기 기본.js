

function solution(s) {
    return (s.length !== 4 && s.length !== 6) ? false : s.split("").map(Number).every((item) => !isNaN(item));
}