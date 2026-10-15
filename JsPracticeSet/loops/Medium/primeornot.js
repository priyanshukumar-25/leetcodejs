let n = 18;
let isPrime = true;

if ( n < 0) {
    isPrime = false;
} else {
    for (let i = 2; i <= n; i++) {
        if (n % i === 0) {
            isPrime = false
            break;
        }
    }
}

if (isPrime) {
    console.log("This is Prime number : " + num)
} else {
    console.log("This is not prime number") 
    
} 
