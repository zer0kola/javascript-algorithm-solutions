function solution(my_string, alp) {
    let arr = [];
    for (let char of my_string){
        if (char === alp){
            arr.push(char.toUpperCase());
        }
        else arr.push(char)
    }
    answer = arr.join('')
    return answer;
}