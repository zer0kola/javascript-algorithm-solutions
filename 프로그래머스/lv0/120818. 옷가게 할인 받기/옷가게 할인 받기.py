import math

def solution(price):    
    answer = 0
    if(price >= 500000):
        answer = math.floor(price * 8 /10)
    elif(price >= 300000):
        answer = math.floor(price * 9 / 10)
    elif(price >=100000):
        answer = math.floor(price * 95 / 100)
    else: answer = price 
    return answer