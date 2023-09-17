function solution(id_pw, db) {
    for (info of db){
        if (info[0] === id_pw[0]){
            if (info[1] === id_pw[1])
                return 'login'
            else return 'wrong pw'
        }
    }return 'fail'
}