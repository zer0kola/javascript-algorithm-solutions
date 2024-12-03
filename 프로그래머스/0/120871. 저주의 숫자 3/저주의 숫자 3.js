function solution(n) {
    let arr = [];
    for (let i = 1; i < 300; i++){
        if (i % 3 === 0) continue;
        else if (String(i).includes('3')) continue;
        else arr.push(i);
    }
    return arr[n-1];
}