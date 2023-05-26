function solution(num_list) {
    num_list.sort((a,b) => a-b);
    num_list.splice(0,5);
    var answer = num_list;
    return answer;
}