function solution(x) {
    let sum = x.toString().split('').map(Number).reduce((acc, cur)=> acc + cur, 0);
    return x % sum === 0 ? true : false;
}