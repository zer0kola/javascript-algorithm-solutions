function solution(absolutes, signs) {
    for (let i = 0; i < signs.length ; i++){
        absolutes[i] = signs[i] ? absolutes[i] : -1 * absolutes[i];
    }
    return absolutes.reduce((acc, cur) => acc += cur);
}