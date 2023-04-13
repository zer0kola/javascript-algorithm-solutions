### 실전예제 1. 큰 수의 법칙

# 특징
# -> 다양한 수로 이루어진 배열이 있을 때, 주어진 N개의 자연수들을 M번 더하여 가장 큰 수를 만드는 법칙
# -> 단, 배열의 특정한 인덱스에 해당하는 수가 연속해서 K번 초과하여 더해질 수 없음

# 1. 문제
#    첫째 줄에 N, M, K의 자연수가 주어지며, 각 자연수는 공백으로 구분한다.
#    둘째 줄에 N개의 자연수가 주어진다. 공백으로 구분한다.
#    입력으로 주어지는 K는 항상 M보다 작거나 같다.
#    첫째 줄에 큰 수의 법칙에 따라 더해진 답을 출력한다.

# 입력 예시
# 5 8 3
# 2 4 5 4 6

answer = 0
n, m, k = map(int, input().split())
arr = list(map(int, input().split()))
arr.sort()
num1 = arr[n-1]
num2 = arr[n-2]

while True:
  for i in range(k):
    if (m == 0):
      break
    answer += num1
    m -= 1
  if (m == 0):
    break
  answer += num2
  m -= 1

print(answer)


