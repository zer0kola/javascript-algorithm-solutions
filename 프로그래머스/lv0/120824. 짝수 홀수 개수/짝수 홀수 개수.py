def solution(num_list):
    answer = []
    even = 0
    odd = 0
    for num in num_list:
        if (num % 2 ==0):
            even += 1
        else:
            odd += 1
    answer.extend([even, odd])
    return answer