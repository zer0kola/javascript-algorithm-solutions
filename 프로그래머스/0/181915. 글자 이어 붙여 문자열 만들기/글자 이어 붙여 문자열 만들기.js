function solution(my_string, index_list) {
    var answer = '';
    let arr = [];
    for (num of index_list){
        arr.push(my_string[num])
    }
    answer = arr.join('');
    return answer;
}