function solution(array, commands) {
    const answer = [];
    commands.forEach((item)=> {
        answer.push(array
                    .slice(item[0]-1, item[1])
                    .sort((a, b)=> a-b)
                    [item[2]-1]
                   );
    })
    return answer;
}