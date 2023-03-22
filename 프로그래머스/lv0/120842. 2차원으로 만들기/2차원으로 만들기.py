def solution(num_list, n):
    answer = [[]]
    num = 0
    # answer[0].append(num_list[0])
    # answer[0].append(num_list[1])
    # answer[1].append(num_list[2])
    # answer[1].append(num_list[3])
    for i in range(len(num_list)):
        answer[num].append(num_list[i])
        if ((i+1) % n == 0):
            num += 1
            answer.append([])
    answer.pop()    
    return answer