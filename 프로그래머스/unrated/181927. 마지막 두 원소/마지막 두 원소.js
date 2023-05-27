function solution(num_list) {
    const last1 = num_list[num_list.length - 1];
    const last2 = num_list[num_list.length - 2];
    var answer = num_list.slice();
    if (last1 > last2) answer.push(last1-last2)
    else answer.push(last1*2)
    return answer;
}