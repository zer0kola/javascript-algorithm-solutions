def solution(my_str, n):
    answer = []
    while(len(my_str) > n):
        el = my_str[:n]
        answer.append(el)
        my_str = my_str[-(len(my_str)-n):]
    answer.append(my_str)
    return answer