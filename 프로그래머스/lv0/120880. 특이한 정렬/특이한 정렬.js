function solution(numlist, n) {
       return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
    // 절댓값 차이가 동일하다면 두번째 부분인 b-a를 통해 내림차순으로 정렬
}