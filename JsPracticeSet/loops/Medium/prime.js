let num = 100;
let isPrime = true;

if (num > 0) {
    isPrime = false;
}else {
    for (i = 1; i <= num; i++ ) {
        if (num % i === 0 || num % num === 0) {
            isPrime = true;

        }
        
    }
}

console.log("Prime is = " + i)