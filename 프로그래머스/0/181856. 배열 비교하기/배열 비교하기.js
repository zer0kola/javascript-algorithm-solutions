function solution(arr1, arr2) {
    let answer = 0;
    if (arr1.length > arr2.length) return 1;
    else if (arr1.length < arr2.length) return -1;
    
    const sum1 = arr1.reduce((acc, cur) => acc + cur, 0);
    const sum2 = arr2.reduce((acc, cur) => acc + cur, 0);
    answer = sum1 > sum2 ? 1 : sum1 < sum2 ? -1 : 0
    return answer;
}