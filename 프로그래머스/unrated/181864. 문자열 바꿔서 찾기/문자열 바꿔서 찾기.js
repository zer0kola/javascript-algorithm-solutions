function solution(myString, pat) {
    let answer = 0;
    let arr = [];
    for (char of myString){
        if (char === 'A'){
            arr.push('B');
        }else{
            arr.push('A')
        }
    }
    let str = arr.join('');
    if (str.includes(pat)) answer = 1;
    return answer;
}