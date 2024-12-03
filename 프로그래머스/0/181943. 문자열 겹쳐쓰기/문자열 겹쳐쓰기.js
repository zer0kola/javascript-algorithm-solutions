function solution(my_string, overwrite_string, s) {
    var answer = '';
    let arr = Array.from(my_string);
    arr.splice(s, overwrite_string.length, overwrite_string);
    answer = arr.join('');
    return answer;
}