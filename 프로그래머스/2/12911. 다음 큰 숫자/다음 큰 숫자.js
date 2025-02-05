function solution(n) {
    const bar = +n.toString(2).split('').filter((item)=> item === '1').length
    
    let answer = +n + 1;
    
    while(true) {
        if (answer.toString(2).split('').filter((item)=> item === '1').length === bar) break;
        else answer++;
    }
    return answer
}