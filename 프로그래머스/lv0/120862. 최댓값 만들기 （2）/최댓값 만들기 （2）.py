def solution(numbers):
    answer = 0
    numlist =[]
    for i in range(0, len(numbers)-1):
        for j in range (i+1, len(numbers)):
            numlist.append(numbers[i] * numbers[j])
    answer = max(numlist)
    return answer