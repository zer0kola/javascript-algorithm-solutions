t = int(input())
n = int(input())
sum = 0
for i in range(n):
    a, b= map(int, input().split())
    sum = sum + a*b
if t == sum:
    print("Yes")
else:
    print('No')