class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null; // 큐의 첫 번째 요소 (dequeue할 위치)
    this.tail = null; // 큐의 마지막 요소 (enqueue할 위치)
    this.size = 0;
  }

  push(item) {
    const newNode = new Node(item);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  pop() {
    if (!this.head) return null; // 큐가 비어있으면 null 반환
    const value = this.head.value;
    this.head = this.head.next;
    if (!this.head) this.tail = null; // 마지막 요소를 제거했다면 tail도 초기화
    this.size--;
    return value;
  }

  isEmpty() {
    return this.size === 0;
  }

  peek() {
    return this.head ? this.head.value : null;
  }
}

function solution(maps) {
    // 일단 그래프에서 최단거리를 찾는 문제, 가중치가 없으므로 BFS를 사용해서 푼다
    const n = maps.length;
    const m = maps[0].length;
    const queue = new Queue();

    // 방문 여부 및 거리 배열
    const visited = Array.from({ length: n }, () => Array(m).fill(false));
    const distance = Array.from({ length: n }, () => Array(m).fill(0));
    
    // 방향 벡터 (상, 하, 좌, 우)
    const dx = [0, 0, 1, -1];
    const dy = [1, -1, 0, 0];

    // 시작점 (0,0) 설정
    queue.push([0, 0]);
    visited[0][0] = true;
    distance[0][0] = 1; // 시작 위치는 거리 1

       while (!queue.isEmpty()) {
        const [x, y] = queue.pop();

        // 네 방향 탐색
        for (let i = 0; i < 4; i++) {
            const nextX = x + dx[i];
            const nextY = y + dy[i];

            // **유효한 위치인지 확인**
            if (nextX >= 0 && nextY >= 0 && nextX < n && nextY < m) {
                // **1만 이동 가능 + 방문하지 않은 곳만**
                if (maps[nextX][nextY] === 1 && !visited[nextX][nextY]) {
                    visited[nextX][nextY] = true;
                    distance[nextX][nextY] = distance[x][y] + 1; // 거리 업데이트
                    queue.push([nextX, nextY]);

                    //  BFS 도중 처음 목표 지점에 도착하면 그 거리가 최단거리
                    if (nextX === n - 1 && nextY === m - 1) {
                        return distance[nextX][nextY];
                    }
                }
            }
        }
    }

    return -1; // 목표 지점에 도달할 수 없는 경우
}
