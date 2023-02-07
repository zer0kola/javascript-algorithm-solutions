def solution(cipher, code):
    answer = ''
    q =  0
    for a in cipher:
        q = q + 1
        if (q % code ==0):
            answer = answer + a
    return answer