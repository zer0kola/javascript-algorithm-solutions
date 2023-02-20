def solution(my_string):
    answer = []
    a= list(my_string)
    for char in a:
        if char not in answer:
            answer.append(char)
    answer = ''.join(answer)
    return answer