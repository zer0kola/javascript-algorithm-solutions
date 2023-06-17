function solution(balls, share) {
    var answer = fact(balls) / (fact(balls-share) * fact(share))
    return answer;
}

function fact(num) {
    let returnFactorial = BigInt(1)
    for(let i = num; i >= 2; i-- ) {
        returnFactorial*=BigInt(i)
    }
    return returnFactorial
}