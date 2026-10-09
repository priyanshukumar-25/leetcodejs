let num = prompt("Enter a number");

if (num >= "A" && num <= "Z") {
    console.log("Uppercase Letter");
}
else if (num >= 'a' && num <= 'z') {
    console.log("Lowercase Letter");
}
else if (num >= 0 && num <= 9) {
    console.log("Number");
}
else {
    console.log("Special Character");
}