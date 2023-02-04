def solution(s1, s2):
    answer = 0
    for a in s1:
        if (a in s2): answer = answer + 1
    return answer