r = ""
for i in input():
    if i.islower():
        r += i.upper()
    else:
        r += i.lower()
print(r)