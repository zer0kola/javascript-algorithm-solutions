def solution(i, j, k):
    answer = 0
    for a in range(i, j+1):
        chars = list(str(a))
        for char in chars:
            if char == str(k):
                answer += 1
                continue
    return answer