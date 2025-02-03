function solution(numbers, target) {
    const stack = [];
    let count = 0;
    
    stack.push({index: 0, sum: 0});
    
    while(stack.length) {
        const current = stack.pop();
        const curIndex = current.index;
        const curSum = current.sum;
        
        if (curIndex === numbers.length) {
            if (curSum === target) count++;
            continue;
        }
        
        stack.push({ index: curIndex + 1, sum: curSum + numbers[curIndex]});
        stack.push({ index: curIndex + 1, sum: curSum - numbers[curIndex]});
    }
    
    return count;
}