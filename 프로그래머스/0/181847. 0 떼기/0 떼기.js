function solution(n_str) {
    const arr = n_str.split('');
    while (true){
        if (arr[0] === '0') arr.shift();
        else break;
    }
    return arr.join('')
}