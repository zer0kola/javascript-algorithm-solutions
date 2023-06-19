function solution(n) {
    let arr = [];
    for (let i = 1; i <= Math.floor(n/2); i++){
        if (n % i === 0) arr.push(i);
    }
    return arr.reduce((acc, cur) => acc + cur, 0) + n;
}