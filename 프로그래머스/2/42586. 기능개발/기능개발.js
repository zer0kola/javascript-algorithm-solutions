function solution(progresses, speeds) {
    const answer = [];
    while(progresses.length > 0){
        let count = 0;
        progresses = progresses.map((progress, index)=> {
            return progress + speeds[index]
        })
        while(progresses[0] > 99){
            progresses.shift();
            speeds.shift();
            count ++;
        }
        if (count > 0) answer.push(count);
    }
    return answer;
}