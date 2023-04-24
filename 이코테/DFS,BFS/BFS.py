# Queue

# 데이터 입출력 속도를 위해 collections 모듈에서 제공하는 deque(덱) 자료구조를 사용
# append 메서드는 리스트의 가장 뒤쪽에 데이터를 삽입하고
# popleft 메서드는 리스트의 가장 앞쪽 데이터를 꺼낸다

# BFS(너비 우선 탐색)
# : 큐가 동작 원리, 큐 자료구조를 이용하여 구현

# BFS 의 동작 과정
# 1. 탐색 시작 노드를 큐에 삽입하고 방문 처리를 한다.
# 2. 큐에서 노드를 꺼내 해당 노드의 인접 노드 중 방문하지 않은 노드를 모두 큐에 삽입하고 방문 처리를 한다.
# 3. 2번 과정을 더 이상 수행할 수 없을 때까지 반복한다.

# BFS 예제
from collections import deque

def bfs(graph, start, visited):
    # 큐 구현 위해 deque 라이브러리 사용
    queue = deque([start])
    # 현재 노드 방문 처리
    visited[start] = True
    # 큐가 빌 때까지 반복
    while queue:
        # 큐에서 하나의 원소를 뽑아 출력
        v = queue.popleft()
        print(v, end=' ')
        # 해당 원소와 연결된, 아직 방문하지 않은 원소들을 큐에 삽입
        for i in graph[v]:
            if not visited[i]:
                queue.append(i)
                visited[i] = True

# 각 노드가 연결된 정보를 리스트 자료형으로 표현(2차원 리스트)
graph = [
    [],
    [2,3,8],
    [1,7],
    [1,4,5],
    [3,5],
    [3,4],
    [7],
    [2,6,8],
    [1,7]
]

# 각 노드가 방문된 정보를 리스트 자료형으로 표현(1차원 리스트)
visited = [False] * 9

# 정의된 BFS 함수 호출
bfs(graph, 1, visited)

# 출력: 1 2 3 8 7 4 5 6