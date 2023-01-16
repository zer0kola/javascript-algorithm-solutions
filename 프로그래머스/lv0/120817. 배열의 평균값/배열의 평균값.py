def solution(numbers):
    answer = 0
    for number in numbers:
        answer = answer + number
    return answer/len(numbers)