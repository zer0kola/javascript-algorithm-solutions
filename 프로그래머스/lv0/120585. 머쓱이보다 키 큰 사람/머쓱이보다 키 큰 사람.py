def solution(array, height):
    answer = 0;
    for k in array:
        if (k>height):
            answer += 1
    return answer