function solution(strArr) {
    return strArr.filter((item)=> {
       return !item.includes('ad')
    })
}