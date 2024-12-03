function solution(n, control) {
    var answer = 0;
    const arr = control.split("");
    console.log(arr)
    for (char of arr){
        if (char === 'w') n += 1;
        else if (char === 's') n -= 1;
        else if (char === 'd') n += 10;
        else n -= 10;
    }
    answer = n;
    return answer;
}