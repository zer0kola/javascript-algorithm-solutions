function solution(num_list, n) {
    var answer = 0;
    let flag = num_list.findIndex((num) => num === n)
    if (flag !== -1){
        answer = 1;
    }
    return answer;
}