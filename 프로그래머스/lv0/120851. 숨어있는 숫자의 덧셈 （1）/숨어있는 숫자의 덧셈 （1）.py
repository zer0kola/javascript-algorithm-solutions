def solution(my_string):
    answer = 0
    num = []
    for char in my_string:
        if char.isdigit():
            num.append(char)
    for number in num:
        answer = answer + int(number)
    return answer
        