li = []
for i in range(1, 31):
    li.append(i)
for i in range(0, 28):
    li.remove(int(input()))
for i in li:
    print(i)