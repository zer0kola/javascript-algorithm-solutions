def solution(numbers, direction):
    answer = []
    if(direction == 'right'):
        answer.append(numbers[len(numbers)-1])
        for num in range(1, len(numbers)):
            answer.append(numbers[num -1])
    else: 
        for num in range(0, len(numbers)-1):
            answer.append(numbers[num+1])
        answer.append(numbers[0])
    return answer