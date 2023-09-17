function solution(dots) {
    let x = [];
    let y = [];
    for (dot of dots){
        x.push(dot[0]);
        y.push(dot[1]);
    }
    x.sort((a, b) => a - b);
    y.sort((a, b) => a - b);
    return (x[3] - x[0]) * (y[3] - y[0])
    
}