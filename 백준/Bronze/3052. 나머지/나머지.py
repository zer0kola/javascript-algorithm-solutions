a = []
b = []
for i in range(10):
    a.append(int(input()))
for i in a:
    b.append(i % 42)
b = list(set(b))
print(len(b))