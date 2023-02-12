def solution(num, k):
    answer = -1
    for n in str(num):
        if n == str(k):
            answer = str(num).index(n) + 1
    return answer