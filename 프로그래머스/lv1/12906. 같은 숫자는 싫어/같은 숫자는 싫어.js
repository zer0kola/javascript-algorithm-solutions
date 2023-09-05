function solution(arr)
{
    var answer = [];
    for (let i =0; i< arr.length; i++){
        if (answer.length > 0 && answer[answer.length-1] === arr[i]) continue;
        else answer.push(arr[i]);
    }
    return answer;
}