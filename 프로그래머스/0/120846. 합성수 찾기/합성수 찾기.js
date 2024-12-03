function solution(n) {
    var answer = 0;
    for (let i=1; i <= n ; i++){
        if(calc(i) > 2) answer ++;
    }
    return answer;
}

const calc = (num) => {
    let count = 0;
    for (let i = 1; i <= num; i++ ){
        if (num % i === 0) count ++;
    }
    return count;
}