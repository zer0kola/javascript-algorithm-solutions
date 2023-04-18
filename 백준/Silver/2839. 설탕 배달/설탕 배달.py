n = int(input())
answer = 0
while True:
  if n < 0:
    print(-1)
    break
  elif n % 5 == 0:
    answer += n//5
    print(answer)
    break
  else:
    n -= 3
    answer += 1