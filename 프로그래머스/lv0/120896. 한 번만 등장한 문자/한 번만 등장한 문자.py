def solution(s):
    first = list(s)
    second = []
    for x in first:
        if (first.count(x) == 1):
            second.append(x)
    second.sort()
    answer = ''.join(second)
    return answer