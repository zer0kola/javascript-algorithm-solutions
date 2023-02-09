def solution(age):
    answer = ''
    alphabet = 'abcdefghij'
    for char in str(age):
        answer += alphabet[int(char)]
    return answer