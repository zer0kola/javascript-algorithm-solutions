function solution(n, arr1, arr2) {
    const map1 = [];
    const map2 = [];
    const answer = [];
    
    for (let i = 0; i < n; i++){
        const item1 = Array(n).fill(0);
        const item2 = Array(n).fill(0);
        
        arr1[i].toString(2).split('').reverse().forEach((item,idx)=> {
            if (item === '1') item1[idx] = 1;
        })
        
        arr2[i].toString(2).split('').reverse().forEach((item,idx)=> {
            if (item === '1') item2[idx] = 1;
        })
        
        map1.push(item1)
        map2.push(item2)
    }
    
    for (let j = 0; j < n; j++){
        let arr = [];
        for (let k = 0; k < n; k++){
            if (!!map1[j][k] || !!map2[j][k]) arr.push("#");
            else arr.push(' ');
        }
        answer.push(arr)
    }
    
    return answer.map((item)=> item.reverse().join(''))
}