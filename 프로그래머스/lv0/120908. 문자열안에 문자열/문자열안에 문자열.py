def solution(str1, str2):
    try: 
        str1.index(str2)
        answer = 1
    except:
        answer =2
    return answer
            