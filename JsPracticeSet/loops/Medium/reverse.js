let num = 1234;
let rev = 0;

for (; n > 0; num = Math.floor(n / 10)) {
    
    rev = rev * 10 + (num % 10)

}

console.log(rev)