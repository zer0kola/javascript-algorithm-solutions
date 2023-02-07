def solution(rsp):
    answer = ''
    for i in rsp:
        if (i == '2'):
            answer = answer + '0'
        elif (i == '5'):
            answer = answer + '2'
        else:
            answer = answer + '5'
    return answer