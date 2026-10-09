let a = 4;
let b = 5;
let op = '+';

switch (op) {
    case '+':
        console.log("Sum is" + (a + b));
        break;
    case '-':
        console.log("Sub is" + (a - b));
        break;
    case '*':
        console.log("Mul is" + (a * b));
        break;
    case '/':
        console.log("Div is" + (a / b));
    default:
        console.log("Invalid operator")
}
