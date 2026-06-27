
function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function getPlayerGuess() {
  for (;;) {
    const input = prompt("Enter a number between 1 and 100:");

    if (input === null) {
      return null;
    }

    const trimmedInput = input.trim();

    if (trimmedInput === "") {
      console.log("You did not enter anything. Please type a whole number from 1 to 100.");
      continue;
    }

    if (!Number.isNaN(Number(trimmedInput)) && !Number.isInteger(Number(trimmedInput))) {
      console.log(`"${input}" is not a whole number. Please enter a number like 7, 42, or 100.`);
      continue;
    }

    if (!/^\d+$/.test(trimmedInput)) {
      console.log(`"${input}" is not valid input. Please enter digits only, with no letters or symbols.`);
      continue;
    }

    const guess = Number(trimmedInput);

    if (guess < 1) {
      console.log(`"${input}" is too low. Please enter a number from 1 to 100.`);
      continue;
    }

    if (guess > 100) {
      console.log(`"${input}" is too high. Please enter a number from 1 to 100.`);
      continue;
    }

    return guess;
  }
}

function checkGuess(playerGuess, correctNumber) {
  if (playerGuess < correctNumber) {
    return "Too low!";
  } else if (playerGuess > correctNumber) {
    return "Too high!";
  } else {
    return "Correct!";
  }
}

function getInstructionsMessage() {
  return (
    "Number Guessing Game\n\n" +
    "How to play:\n" +
    "- Guess a number between 1 and 100.\n" +
    "- You have 10 attempts to find the correct number.\n" +
    "- Repeated guesses do not count.\n" +
    "- Enter only whole numbers.\n" +
    "- Click Cancel to quit the game.\n\n" +
    "Game feedback:\n" +
    "- You will see 'Too high' or 'Too low' after each guess.\n" +
    "- The game ends when you guess correctly or run out of attempts.\n\n" +
    "Scoring:\n" +
    "- Fewer attempts give a higher score.\n" +
    "- Try to guess the number as quickly as possible! \n\n" +
    "How to see results:\n" +
    "- Open the browser console.\n" +
    "- Windows/Linux: F12 or Ctrl+Shift+I\n" +
    "- Mac: Cmd+Option+I\n" 
  );
}

function showInstructions() {
  alert(getInstructionsMessage());
}

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

    if (previousGuesses.includes(playerGuess)) {
      alert(`You already guessed ${playerGuess}. That guess will not count, so please try a different number.`);
      console.log(`You already guessed ${playerGuess}. Pick a new number so you do not waste time repeating guesses.`);
      continue;
    }

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
showInstructions();
game();
