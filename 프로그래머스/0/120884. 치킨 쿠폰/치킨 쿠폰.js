function solution(chicken) {
    let service = 0;
    let coupon = chicken;
    while(true){
        if (coupon < 10) break;
        service += Math.floor(coupon / 10);
        coupon = Math.floor(coupon / 10) + coupon % 10;
    }
    return service;
}