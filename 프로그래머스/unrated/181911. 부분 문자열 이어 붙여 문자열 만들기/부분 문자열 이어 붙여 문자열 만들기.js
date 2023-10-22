function solution(my_strings, parts) {
    var answer = [];
    for( let i =0; i < my_strings.length; i++){
        let arr = my_strings[i].split('');
        answer.push(...arr.slice(parts[i][0], parts[i][1] + 1));
    }
    return answer.join('');
}