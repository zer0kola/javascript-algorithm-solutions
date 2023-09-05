function solution(price, money, count) {
    let total = 0;
    for (let i = 1; i <= count; i++){
        total += price * i;
    }
    answer = money - total;
    return answer > 0 ? 0 : Math.abs(answer);
}