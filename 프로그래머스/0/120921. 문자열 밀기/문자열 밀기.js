function solution(A, B) {
    let answer = 0;
    if (A === B) return answer;
    let arr = A.split('')
    while(true) {
        arr.unshift(arr.pop());
        const str = arr.join('')
        answer++;
        if (str === B) return answer;
        if (answer > arr.length) return -1;
    }
}