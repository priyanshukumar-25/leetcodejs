let len1 = 5;
let len2 = 6;
let len3 = 5;

if (len1 > 0 && len2 > 0 && len3 > 0 && len1 + len2 > len3 && len2 + len3 > len1 && len1 + len3 > len2) {
    console.log("The given lengths can form a triangle.");
} else {
    console.log("The given lengths cannot form a triangle.");
}