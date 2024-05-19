function solution(s) {
    let removedZeros = 0;
    let count = 0;
    
    while (s !== '1') {
        count ++;
        x = s.replaceAll('0', '');
        removedZeros += s.length - x.length;
        s = x.length.toString(2)
    }
    return [count, removedZeros];
}