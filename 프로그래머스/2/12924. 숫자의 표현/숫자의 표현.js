function solution(n) {
    let count = 0; // 가능한 경우의 수를 저장할 변수
    let start = 1; // 시작 숫자
    let end = 1; // 끝 숫자
    let sum = 1; // 현재 연속된 숫자들의 합

    while (start <= Math.floor(n / 2)) { // 시작 숫자가 n의 절반 이하일 때만 반복
        if (sum === n) { 
            // 현재 합이 n과 같다면
            count++; // 가능한 경우의 수를 증가
            sum -= start; // 시작 숫자를 합에서 제외
            start++; // 시작 숫자를 증가
        } else if (sum > n) {
            // 현재 합이 n보다 크다면
            sum -= start; // 시작 숫자를 합에서 제외
            start++; // 시작 숫자를 증가
        } else {
            // 현재 합이 n보다 작다면
            end++; // 끝 숫자를 증가
            sum += end; // 끝 숫자를 합에 추가
        }
    }

    return count + 1; // 가능한 경우의 수 반환 (자기 자신을 포함하기 위해 +1)
}