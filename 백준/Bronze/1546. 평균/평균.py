n = int(input())
num = list(map(int, input().split()))
m = max(num)
score = []
for a in num:
    score.append(a/m*100)
print(sum(score)/len(score))
