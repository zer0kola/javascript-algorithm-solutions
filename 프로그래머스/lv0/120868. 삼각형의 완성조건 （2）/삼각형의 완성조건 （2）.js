function solution(sides) {
    var answer = 0;
    sides.sort((a,b)=> a-b);
    const min = sides[0];
    const max = sides[1];
    for (let i = max - min + 1; i <= max ; i++){
        answer++;
    }
    for (let i = max + 1; i < max + min ; i++){
        answer++;
    }
    return answer;
}