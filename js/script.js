

// Generate Random Number
function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

// Get Player Guess
function getPlayerGuess() {
  for (;;) {
    const input = prompt("Enter a number between 1 and 100:");

    if (input === null) {
      return null;
    }

    const trimmedInput = input.trim();

    if (!/^\d+$/.test(trimmedInput)) {
      console.log("Invalid input. Please enter a whole number between 1 and 100.");
      continue;
    }

    const guess = Number(trimmedInput);

    if (guess >= 1 && guess <= 100) {
      return guess;
    }

    console.log("Invalid input. Please enter a whole number between 1 and 100.");
  }
}

// Check Guess
function checkGuess(playerGuess, correctNumber) {
  if (playerGuess < correctNumber) {
    return "Too low!";
  } else if (playerGuess > correctNumber) {
    return "Too high!";
  } else {
    return "Correct!";
  }
}

// Main Game
function game() {
  const correctNumber = generateRandomNumber();
  const maxAttempts = 10;

  let guessedCorrectly = false;
  let playerGuess;
  let previousGuesses = [];

  console.log("Welcome to the Number Guessing Game");

  for (let attempts = 0; attempts < maxAttempts && !guessedCorrectly;) {
    playerGuess = getPlayerGuess();

    if (playerGuess === null) {
      console.log("Game cancelled.");
      return;
    }

    // Check if number was already guessed
    if (previousGuesses.includes(playerGuess)) {
      alert(`Hey....You already guessed ${playerGuess}! Try a different number.`);
      console.log(`You already guessed ${playerGuess}!`);
      continue;
    }

    // Save the guess
    previousGuesses.push(playerGuess);

    attempts++;

    const result = checkGuess(playerGuess, correctNumber);
    console.log(result);

    if (result === "Correct!") {
      guessedCorrectly = true;
    } else {
      console.log(`Attempts remaining: ${maxAttempts - attempts}`);
    }
  }

  if (guessedCorrectly) {
    const score = (maxAttempts - previousGuesses.length + 1) * 10;

    console.log("Congratulations! You guessed the number!");
    console.log(`Correct Number: ${correctNumber}`);
    console.log(`Your Guess: ${playerGuess}`);
    console.log(`Attempts used: ${previousGuesses.length}`);
    console.log(`Score: ${score}`);
  } else {
    console.log("Opps....Game Over!");
    console.log(`The correct number was ${correctNumber}`);
  }
}

// Start Game
game();
