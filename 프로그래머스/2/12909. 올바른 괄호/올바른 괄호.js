function solution(s){
    try{
        const arr = [];
        s.split('').forEach((item)=> {
            if (item === '(') arr.push(1);
            else if (arr.length === 0){
                throw new Error();
            }else {
                arr.pop();
            }
        })
        if (arr.length === 0) return true;
        else return false;
    }catch(e) {
        return false
    }
}