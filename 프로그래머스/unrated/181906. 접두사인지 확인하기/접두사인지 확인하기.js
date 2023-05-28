function solution(my_string, is_prefix) {
    var answer = 0;
    if (my_string.startsWith(is_prefix)) answer = 1;
    return answer;
}