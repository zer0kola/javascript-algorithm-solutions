function solution(s) {
    let answer = [];
    const words = s.split(' ');
    words.forEach((word) => {
        let chars = word.split('');
        for (let i = 0; i < chars.length; i++){
            if (i % 2 === 0) chars[i] = chars[i].toUpperCase();
            else chars[i] = chars[i].toLowerCase();
        }
        answer.push(chars.join(''));
    })
    return answer.join(' ')
}