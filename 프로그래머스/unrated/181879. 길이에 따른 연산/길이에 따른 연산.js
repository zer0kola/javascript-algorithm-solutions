function solution(num_list) {
    var answer = 0;
    if (num_list.length <= 10){
        answer = 1;
        num_list.forEach((item)=>{
            answer *= item
        })
    }else {
        num_list.forEach((item)=> {
            answer += item
        })
    }
    return answer;
}