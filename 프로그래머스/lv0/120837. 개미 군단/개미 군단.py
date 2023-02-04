def solution(hp):
    answer = 0
    answer = answer + int(hp / 5)
    hp = hp % 5
    answer = answer + int(hp/3)
    hp = hp % 3
    answer = answer + hp
    return answer