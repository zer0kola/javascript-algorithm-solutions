function solution(arr) {
    var answer = 0;
    answer = arr.reduce((acc, cur)=> {
        return acc += cur;
    })
    answer /= arr.length;
    return answer;
}