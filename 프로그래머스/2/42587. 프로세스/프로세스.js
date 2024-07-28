function solution(priorities, location) {
    // 큐 초기화: 각 프로세스를 [중요도, 인덱스]로 표현
    const queue = priorities.map((priority, index) => [priority, index]);
    let executionOrder = 0; // 실행 순서

    while (queue.length > 0) {
        // 큐에서 맨 앞의 프로세스를 꺼냄
        const currentProcess = queue.shift();
        const hasHigherPriority = queue
        .some(process => process[0] > currentProcess[0]);

        if (hasHigherPriority) {
            // 현재 프로세스보다 우선순위가 높은 것이 있으면 큐의 끝으로 이동
            queue.push(currentProcess);
        } else {
            // 현재 프로세스를 실행
            executionOrder++;

            // 실행한 프로세스가 찾는 프로세스인지 확인
            if (currentProcess[1] === location) {
                // 맞으면 순서 반환
                return executionOrder;
            }
        }
    }

    return executionOrder; // 실제로 여기에 도달하지 않음
}
