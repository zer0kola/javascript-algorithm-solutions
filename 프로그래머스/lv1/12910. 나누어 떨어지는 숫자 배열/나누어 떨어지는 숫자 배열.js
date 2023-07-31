function solution(arr, divisor) {
    var answer = [];
    arr.forEach((item) => {
        if (item % divisor === 0){
            answer = [...answer, item]
        }
    })
    answer.sort((a,b) => a - b);
    if (answer.length === 0) answer = [-1]
    return answer;
}