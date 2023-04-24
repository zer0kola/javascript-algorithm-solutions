n, m = map(int, input().split())
arr = [0] * n
for _ in range(m):
  i, j, k = map(int, input().split())
  for num in range(i, j+1):
    arr[num-1] = k
for num in arr:
  print(num, end=' ')