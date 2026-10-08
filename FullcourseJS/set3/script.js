// for (let i=1; i<=100; i++) {
//     console.log(i);
// }

// for (let i=1; i<=100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

let gamenum = Math.floor(Math.random() * 100) + 1;
let guess = prompt("Guess a number between 1 and 100");

while (guess != gamenum) {
    guess = prompt("Wrong guess! Try again.");

}

alert("Congratulations you guessed the number" + gamenum);


