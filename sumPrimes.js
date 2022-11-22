function sumPrimes(num) {
    const numbers = [];
    for (let i=2; i<=num; i++) {
        numbers.push(i);
    }
    const primes = [];
    for (let number of numbers) {
        let counter = 0;
        for (let i=1; i<=number; i++) {
            if (number % i === 0) {
            counter++;
            }
        }
        if (counter === 2) {
            primes.push(number);
        }
    }
    return primes.reduce(function(a,b) {return a + b});
}

console.log(sumPrimes(10));