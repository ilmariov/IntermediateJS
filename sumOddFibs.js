function sumFibs(num) {
    const arrFibs = [1, 1];
    let b1 = arrFibs[0];
    let b2 = arrFibs[1];
    let fib = b1 + b2;
    if (num > 1) {
        while (fib <= num) {
            if (fib <= num) {arrFibs.push(fib)} 
            b1 = b2;
            b2 = fib;
            fib = b1 + b2
        }
        return arrFibs.filter(int => (int % 2) !== 0).reduce((a,b) => a + b, 0);
    } else {
        return num;
    }
}
  
console.log(sumFibs(75024));