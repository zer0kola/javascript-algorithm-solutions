count = 0
n = int(input())
a = n
b = 0
if (a == 0):
    print(1)
    quit()
while (n != b):
    if (a < 10):
        b = a*10 + a
        count += 1
        a = b
    elif (a % 10 == 0):
        b = a/10
        count += 1
        a = b
    else:
        b = (a % 10) * 10 + (a//10 + a % 10) % 10
        count += 1
        a = b
print(count)