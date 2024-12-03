function solution(arr, k) {
    var answer = [];
    if (k % 2 === 0){
        answer = arr.map((item)=> {
            return item + k
        })
    }
    else {
        answer = arr.map((item) => {
            return item * k
        })
    }
    return answer;
}