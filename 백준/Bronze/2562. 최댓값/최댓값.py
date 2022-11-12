m = 0
n = 0
for i in range(1,10):
    a = int(input())
    m = max(m, a)
    if m == a:
        n = i
        
print(m)
print(n)