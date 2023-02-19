def solution(before, after):
    a = sorted(list(before))
    b = sorted(list(after))
    if (a == b):
        answer = 1
    else:
        answer = 0
    return answer