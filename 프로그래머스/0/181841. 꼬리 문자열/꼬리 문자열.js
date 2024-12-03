function solution(str_list, ex) {
    var answer = [];
    for (str of str_list){
        if (!str.includes(ex)){
            answer.push(str);
        }
    }
    answer = answer.join('')
    return answer;
}