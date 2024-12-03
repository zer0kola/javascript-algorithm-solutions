function solution(s){
    var answer = true;
    let a = 0;
    s = s.toLowerCase();
    for (char of s){
        if (char === 'p') a++;
        else if (char === 'y') a--;
    }
    if (a !== 0) answer = false;
    return answer;
}