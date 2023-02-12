def solution(my_string):
    answer = my_string.lower()
    answer = ''.join(sorted(answer))
    return answer