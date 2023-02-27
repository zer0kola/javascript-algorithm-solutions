import copy
def solution(emergency):
    answer = []
    c = copy.deepcopy(emergency)
    c.sort(reverse=True)
    print(c)
    for num in emergency:
        answer.append(c.index(num) + 1)
    
    return answer