import sys
n = int(sys.stdin.readline())
li = []
for i in range(n):
    li.append(int(sys.stdin.readline()))
li = list(set(li))
li.sort()
for num in li:
    print(num)
