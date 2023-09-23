function solution(quiz) {
    let answer = [];
    quiz.forEach((item)=>{
        const arr = item.split(' ').map(Number);
        const op = item.split(' ')[1]
        if (op === '+') {
            if (arr[0] + arr[2] === arr[4]) answer.push('O')
            else answer.push('X')
        }else {
            if (arr[0] - arr[2] === arr[4]) answer.push('O')
            else answer.push('X')
        }
    })
    return answer;
}