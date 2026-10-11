let num = 7689;
let sum = 0;


for (; num > 0; num = Math.floor(num / 10) ) {
    sum += num % 10

}
console.log("Sum is " + sum)