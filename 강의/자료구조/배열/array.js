// 크기가 N x M 인 2차원 배열 만들기

let arr = Array.from(Array(3), () => new Array(4).fill(0));
console.log(arr);

// slice() 메서드는 어떤 배열의 begin부터 end까지에 대한 shallow copy를 새로운 배열 객체로 반환합니다.
let arr2 = [1, 2, 3, 4, 5];
// slice(시작 인덱스, 종료 인덱스)
console.log(arr2.slice(0, 3)); // [1, 2, 3]
console.log(arr2.slice(2, 5)); // [3, 4, 5]

// splice() 메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.
let arr3 = [1, 2, 3, 4, 5];
// splice(시작 인덱스, 삭제할 요소의 수, 추가할 요소)
arr3.splice(2, 1, 100);
console.log(arr3); // [1, 2, 100, 4, 5]
