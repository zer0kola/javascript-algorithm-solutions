function solution(num_list, n) {
    var answer = [];
    for (let i=n ; i < num_list.length+1; i ++){
        answer.push(num_list[i-1])
    }
    return answer;
}