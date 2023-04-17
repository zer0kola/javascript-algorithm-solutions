t = int(input())
for i in range(t):
  r, s = input().split()
  for char in s:
    print(char * int(r) , end="")
  print()