function solution(num_list) {
    let odd = 0;
    let even = 0;
    
    num_list.forEach((item, index)=> {
        if (index % 2 === 0){
            even += item;
        } else {
            odd += item
        }
    })
    
    
    
    return Math.max(even, odd)
}