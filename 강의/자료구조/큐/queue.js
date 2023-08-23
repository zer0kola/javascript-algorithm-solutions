// FILO
// 타입스크립트로 구현하면 인터페이스를 사용해서 구현할 수 있지만
// 코딩테스트에서는 dictionary를 사용해서 구현하는 것이 간단하다.

// dictionary를 사용해서 구현할 때는 front와 rear를 사용해서 구현한다.
// front는 dequeue를 할 때 사용하고 rear는 enqueue를 할 때 사용한다.
// front와 rear가 같으면 queue가 비어있는 것이다.
// front와 rear의 초기값은 0이다.

class Queue {
  constructor() {
    // 자료들을 담는 dictionary
    this.queue = {};
    // queue의 맨 앞을 가리키는 front
    this.front = 0;
    // queue의 맨 뒤를 가리키는 rear
    this.rear = 0;
  }

  enqueue(item) {
    // queue에 item을 넣을 때는 rear를 사용한다.
    this.queue[this.rear] = item;
    this.rear++;
  }

  dequeue() {
    // queue에서 item을 뺄 때는 front를 사용한다.
    if (this.front === this.rear) return;

    const item = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return item;
  }

  peek() {
    // queue의 맨 앞에 있는 item을 확인할 때는 front를 사용한다.
    return this.queue[this.front];
  }

  getLength() {
    // queue의 길이를 확인할 때는 rear와 front의 차이를 사용한다.
    return this.rear - this.front;
  }
}

let queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

while (queue.getLength() > 0) {
  console.log(queue.dequeue());
}
