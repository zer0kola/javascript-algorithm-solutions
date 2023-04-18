def solution(s):
    arr = s.split()
    answer = 0
    num = 0
    for char in arr:
        if char == 'Z':
            answer -= num
        else:
            num = int(char)
            answer += num
    return answer