// FIFO
// 타입스크립트로 구현하면 interface를 사용해서 구현할 수 있지만
// 코딩테스트에서는 그냥 배열을 사용해서 구현하면 된다.

let stack = [];

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log(stack);

stack.pop();
stack.pop();
stack.pop();

console.log(stack);
