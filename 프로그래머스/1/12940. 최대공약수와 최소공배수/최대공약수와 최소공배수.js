function solution(num1, num2) {
    // 최대공약수 구하는 법:
    // - a,b 를 서로 나눌때, 나누어진다면 b가 최대 공약수 이다. (a>b)
    // - 만약 a,b가 나누어지지 않으면 b와 a를 b로 나눈 나머지를 다시 나눈다.
    // - 서로가 나누어지면 a%b 가 최대공약수이다. 나누어지지 않는다면 위처럼 b와 a를 b를 나눈 나머지를 다시 나눈다.
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    
    // 최소공배수 구하는 법:
    // 두 수를 곱하고 최대 공약수로 나눈다.
    const lcm = (a, b) => a * b / gcd(a, b);
    
    return [gcd(num1, num2), lcm(num1, num2)];
}