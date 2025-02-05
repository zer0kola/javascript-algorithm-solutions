function solution(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    
    let a = 0, b = 1;  // 피보나치 초기 값 설정
    for (let i = 2; i <= n; i++) {
        let temp = (a + b) % 1234567;  // 매번 % 연산 적용
        a = b;
        b = temp;
    }
    
    return b;
}