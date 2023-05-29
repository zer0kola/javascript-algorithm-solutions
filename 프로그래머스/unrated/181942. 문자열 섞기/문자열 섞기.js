function solution(str1, str2) {
    var answer = '';
    let arr = []
    for (let i=0; i< str1.length; i++){
        arr.push(str1[i]);
        arr.push(str2[i]);
    }
    answer= arr.join('')
    return answer;
}