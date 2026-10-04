let len1 = 5;
let len2 = 8;
let len3 = 12;

if (len1 > 0 && len2 > 0 && len3 > 0  && len1 + len2 > len3 && len2 + len3 > len1 && len1 + len3 > len2 ) {
    console.log(" The given lengths can form a triangle.");
    if (len1 === len2 && len2 === len3) {
        console.log("The Given lengths can form an Equilateral triangle.");
    }
    else if (len1 === len2 || len2 === len3 || len1 === len3) {
        console.log("The Given lengths can form an Isosceles triangle.")
    }
    else {
        console.log("The Given lengths can form a Scalene triangle because all sides are different.");
    }
} else {
    console.log("Not a triangle");
}
