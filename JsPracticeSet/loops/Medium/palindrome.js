let num = 121;
let rev = 0;
let original = num;

for (; num > 0; num = Math.floor(num / 10)) {
    rev = rev * 10 + (num % 10);
}

if (original === rev) {
    console.log("Palindrome" + rev)
} else {
    console.log("Not Palindrome")
}