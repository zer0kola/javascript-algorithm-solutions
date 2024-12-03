function solution(myString, pat) {
    var answer = 0;
    if (myString.toLowerCase().includes(pat.toLowerCase())) answer =1;
    return answer;
}