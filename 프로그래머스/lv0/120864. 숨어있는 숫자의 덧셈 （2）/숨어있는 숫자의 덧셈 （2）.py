import re

def solution(my_string):
    answer = 0
    numbers = re.findall(r'\d+', my_string)
    for num in numbers:
        answer += int(num)
    return answer