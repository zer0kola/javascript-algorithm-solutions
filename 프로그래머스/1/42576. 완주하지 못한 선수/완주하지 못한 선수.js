function solution(participant, completion) {
    const map = new Map();

    for(let i = 0; i < participant.length; i++) {
        const 참가자 = participant[i];
        const 완주자 = completion[i] ?? '';

        map.set(참가자, (map.get(참가자) || 0) + 1); // 참가했으면 1 증가
        map.set(완주자, (map.get(완주자) || 0) - 1); // 완주했으면 1 감소
    }

    for(let [key, value] of map) {
        if(value > 0) return key;
    }
}