function solution(s) {
    const answer = [];
    s.split('').forEach((item, index) => {
        const arr = s.slice(0, index).split('').reverse();
        const idx = arr.findIndex((char) => char === item)
        if (idx === -1)answer.push(-1); 
        else answer.push(idx + 1);
    })
    return answer;
}