def solution(origin, n):
    origin.append(n)
    origin.sort()
    if (origin.index(n) == len(origin)-1):
        answer = origin[origin.index(n)-1]
    elif (origin.index(n) == 0):
        answer = origin[1] 
    else:
        if (abs(n - origin[origin.index(n)-1]) > abs(n - origin[origin.index(n)+1])):
            answer = origin[origin.index(n)+1]
        else :
            answer = origin[origin.index(n)-1]
            
    return answer