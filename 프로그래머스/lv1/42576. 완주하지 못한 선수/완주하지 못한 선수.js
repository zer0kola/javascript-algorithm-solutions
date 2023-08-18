function solution(participant, completion) {
    const map = new Map();

    for(let i = 0; i < participant.length; i++) {
        let a = participant[i]; // 참가자
        let b = completion[i] ?? ''; // 완주자

        map.set(a, (map.get(a) || 0) + 1); // 참가했으면 1 증가
        map.set(b, (map.get(b) || 0) - 1); // 완주했으면 1 감소
    }

    for(let [key, value] of map) {
        if(value > 0) return key; // 참가만 하고 완주는 못한 선수 반환
    }
}