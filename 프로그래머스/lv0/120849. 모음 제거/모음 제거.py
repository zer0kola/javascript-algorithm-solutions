def solution(my_string):
    answer = my_string
    for char in my_string:
        if char in 'aeiou':
            answer = answer.replace(char,'')
    return answer