function solution(numbers, n) {
    var answer = 0;
    for (num of numbers){
        if (answer <= n){
        answer += num;
        }
    }
    return answer;
}