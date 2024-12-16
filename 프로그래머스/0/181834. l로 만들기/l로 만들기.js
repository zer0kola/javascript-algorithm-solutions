function solution(myString) {
    return myString.split('').map((char)=> {
        if (char.charCodeAt() >= 108) return char;
        else return 'l';
    })
        .join('');
}