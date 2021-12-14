let input = parseInt(prompt("Enter your maximum number."));
while (!input) {
    input = parseInt(prompt("Enter a valid number."));
}

const targetNum = Math.floor(Math.random() * input) + 1;

let guessNum = prompt("Enter your first guess");
let guesses = 1;

while (parseInt(guessNum) !== targetNum) {
    if (guessNum === 'q') break;
    guesses++;
    if (guessNum > targetNum) {
        guessNum = prompt("You've guessed too high! Try again.");
    } else {
        guessNum = prompt("You have guessed too low! Try again.");
    }
}

if (guessNum === 'q') {
    console.log("TERMINATING");
} else if (guesses > 1) {
    console.log("CONGRATZ!");
    console.log(`YOU GOT IT! It took you ${guesses} guesses`);

} else {
    console.log("CONGRATZ!");
    console.log(`YOU GOT IT! It took you ${guesses} guess`);
}
