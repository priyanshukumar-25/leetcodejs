
let a = Math.random();
const readline = require("readline");


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the first number: ", (firstInput) => {
  rl.question("Enter the second number: ", (secondInput) => {
    const firstNumber = Number(firstInput);
    const secondNumber = Number(secondInput);

    console.log("First number:", firstNumber);
    console.log("Second number:", secondNumber);

    rl.close();
  });
});



