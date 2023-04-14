### 실전예제 3. 1이 될 때 까지

# 문제
# 어떠한 수 N이 1이 될 때 까지 2개의 과정 중 하나를 반복적으로 수행하려고 한다. 
# 단, 두 번째 연산은 N이 K로 나누어떨어질 때만 선택할 수 있다.
# N이 1이 될 때까지 최소한의 수행횟수를 구하시오

# 1. N에서 1을 뺀다
# 2. N을 K로 나눈다

n, k = map(int, input().split()) 
count = 0

while(n != 1):
  if (n % k == 0):
    n //= k 
    # n = n/k와 같은 연산
    count += 1
  else: 
    n = n-1
    count += 1
print(count)