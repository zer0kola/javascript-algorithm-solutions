function solution(num_list) {
    var answer = 0;
    let sum = 0;
    let mul = 1;
    num_list.forEach((item)=>{
        sum += item;
        mul *= item;
    })
    if (Math.pow(sum, 2) > mul) answer = 1;
    return answer;
}