function solution(n) {
    let arr = [];
    for(let i = 1; i <= n; i++){
       if( i % 2 === 1) arr.push('수');
        else arr.push('박');
    }
    return arr.join('');
}