function solution(my_string) {
    let arr = my_string.split(' ');
    let answer = +arr[0];
    for (let i = 1; i < arr.length; i += 2){
        if (arr[i] === '+'){
            answer += +arr[i+1]
        }else{
            answer -= +arr[i+1]
        }
    }
    return answer;
}