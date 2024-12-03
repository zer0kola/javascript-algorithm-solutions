function solution(n) {
    var answer = [];
    for (char of n.toString()){
        answer.unshift(Number(char));
    }
    return answer;
}