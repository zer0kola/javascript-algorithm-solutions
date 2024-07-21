function solution(clothes) {
    const map = new Map();
    clothes.forEach((item)=> {
        const 종류 = item[1];
        map.set(종류, (map.get(종류) || 0) + 1)
    })

    const 종류와개수 = [...map.entries()]; 
    // [
    // ['의상의 종류', '의상의 개수']
    // ]
    return 종류와개수.reduce((acc, cur)=> {
        // 경우의 수는 의상의 개수 + '안 입음'
        return acc * (cur[1] + 1)
    }, 1) - 1; // 모두 '안 입음' 인 경우를 제외
}