def solution(box, n):
    print(box[0]//n)
    print(box[1]//n)
    print(box[2]//n)
    
    answer = (box[0]//n) * (box[1]//n) * (box[2]//n) 
    return answer