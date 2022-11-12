t = int(input())

for i in range(t):
    a, b = map(int, input().split())
    print('Case #',end='')
    print(i+1,end='')
    print(': ',end='')
    print(a,end='')
    print(' + ', end='')
    print(b,end='')
    print(' = ',end='')
    print(a+b)