### 실전예제 2. 숫자 카드 게임

# 첫째 줄에 숫자 카드들이 놓인 행의 개수 N과 열의 개수 M이 공백을 기준으로 하여 각각 자연수로 주어진다
# 둘째 줄부터 N개의 줄에 걸쳐 카드가 주어진다

n, m = map(int, input().split())
min_arr = []
for i in range(n):
  arr = list(map(int, input().split()))
  min_value = min(arr)
  min_arr.append(min_value)
  answer = max(min_arr)
print(answer)



# 특징
#    -> 여러 개의 숫자 카드 중에서 가장 높은 숫자가 쓰인 카드 한 장을 최종적으로 뽑는 게임
#    -> 각 행마다 카드 한 장씩 뽑아서 그 중에서 가장 큰 수를 찾아라
#    -> N x M 형태로 카드가 놓여있다.
#    -> 행을 먼저 선택하고 가장 낮은 카드를 뽑음
# 즉, 각 행마다 가장 작은 수를 찾은 뒤에 그 수 중에서 가장 큰 수를 찾는 것

