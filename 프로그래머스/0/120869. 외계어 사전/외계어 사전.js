function solution(spell, dic) {
    spell.sort();
    for (word of dic){
        arr = word.split('').sort();
        if (equals(spell, arr)) return 1;
    }
    return 2;
}
    
const equals = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]); 
