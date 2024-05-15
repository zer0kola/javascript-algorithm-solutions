function solution(A,B){
    let answer = 0;
    
    A.sort((a,b) => a-b);
    B.sort((a,b)=> b-a);
    return A.reduce((acc, _, index) => acc += A[index] * B[index], 0);
}