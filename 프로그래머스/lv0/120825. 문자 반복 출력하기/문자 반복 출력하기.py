def solution(my_string, n):
    answer = ''
    for char in my_string:
        for i in range(n):
            answer = answer + char
    return answer