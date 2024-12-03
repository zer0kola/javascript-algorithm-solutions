function solution(numbers, k) {
    let answer = 0;
    const n = numbers.length;
    for (let i =0; i<k;i++){
        answer = (i*2 % n) + 1;
    }
    return answer;
}