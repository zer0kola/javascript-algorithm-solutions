def solution(array):
    array.sort()
    answer = array[int((len(array)-1)/2)]
    return answer