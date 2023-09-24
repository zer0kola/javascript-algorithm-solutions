function solution(polynomial) {
    let num = 0;
    let x = 0;
    const arr = polynomial.split(' + ');
    arr.forEach((item) => {
        if(Number.isNaN(+item)){
            if (item === 'x') x++;
            else x += Number(item.replace('x', ''))
        }else{
            num += +item;
        }
    })
    console.log(num, x)
    if (num === 0) return x === 1 ? `x` : `${x}x`
    else if (x === 0) return  `${num}`
    else return  x === 1 ? `x + ${num}` : `${x}x + ${num}`
}