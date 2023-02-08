def solution(my_string, num1, num2):
    chars = list(my_string)
    a = chars[num1]
    b = chars[num2]
    chars[num1] = b
    chars[num2] = a
    answer = ''.join(chars)
    return answer