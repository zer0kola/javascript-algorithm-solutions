function solution(bridge_length, weight, truck_weights) {
    // 변수 초기화
    let 시간 = 0; // 현재 시간
    let 다리대기열 = []; // 다리 위의 트럭과 그들의 진입 시간을 저장하는 대기열
    let 다리무게 = 0; // 다리 위의 총 무게
    let 트럭인덱스 = 0; // 다음에 다리를 건널 트럭의 인덱스
    
    while (트럭인덱스 < truck_weights.length || 다리대기열.length > 0) {
        시간++; // 시간 증가
        
        // 다리를 다 건넌 트럭 제거
        if (다리대기열.length > 0 && 시간 - 다리대기열[0].진입시간 >= bridge_length) {
            const 트럭 = 다리대기열.shift();
            다리무게 -= 트럭.무게;
        }
        
        // 다음 트럭을 다리에 추가할 수 있는지 확인
        if (트럭인덱스 < truck_weights.length && 다리무게 + truck_weights[트럭인덱스] <= weight) {
            다리대기열.push({ 무게: truck_weights[트럭인덱스], 진입시간: 시간 });
            다리무게 += truck_weights[트럭인덱스];
            트럭인덱스++;
        }
    }
    
    return 시간;
}
