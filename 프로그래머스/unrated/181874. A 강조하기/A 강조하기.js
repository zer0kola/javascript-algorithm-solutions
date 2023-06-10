function solution(myString) {
    let arr = [];
    for (char of myString){
        if (char === 'a' || char ===  'A'){
            arr.push('A');
        }else{
            arr.push(char.toLowerCase());
        }
    }
    answer = arr.join('');
    return answer;
}