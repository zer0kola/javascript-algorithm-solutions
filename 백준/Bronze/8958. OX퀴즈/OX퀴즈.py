t= int(input())
for i in range(t):
  tc = input()
  answer = 0
  count = 0
  for char in tc:
    if (char == 'O'):
      count += 1
    else: count = 0
    answer += count
  print(answer)