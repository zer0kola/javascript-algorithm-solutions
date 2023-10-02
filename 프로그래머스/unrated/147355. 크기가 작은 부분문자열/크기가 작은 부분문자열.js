function solution(t, p) {
    var answer = 0;
    for (let i=0; i< t.length - p.length + 1; i++){
        const a = t.substring(i, i+p.length)
        if (+a <= +p) answer ++;
    }
    return answer;
}