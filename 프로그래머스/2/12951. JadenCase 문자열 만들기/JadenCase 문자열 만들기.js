function solution(s) {
    return s.split(' ').map((item) =>  item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()).join(' ')
    
}