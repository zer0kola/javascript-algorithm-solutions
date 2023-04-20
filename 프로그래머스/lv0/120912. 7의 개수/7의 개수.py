def solution(array):
    answer = 0
    result = ''.join(map(str,array))
    for char in result:
        if char == '7':
            answer += 1
    return answer