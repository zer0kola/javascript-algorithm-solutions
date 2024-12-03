function solution(arr) {
    var answer = [];
    for (num of arr){
        for (let i = 0; i < num; i++){
            answer.push(num);
        }
    }
    return answer;
}