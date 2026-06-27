# Number Guessing Game

A simple Number Guessing Game made with JavaScript.

The computer generates a random number between 1 and 100. The player has 10 attempts to guess the correct number.

## Project Structure

```text
number-guessing-game/
│
├── index.html
├── README.md
└── js/
    └── script.js
```

## How to Run

1. Open the project folder.
2. Double-click `index.html`.
3. A browser prompt will ask you to enter a number.
4. Enter a number between `1` and `100`.
5. Open the browser console to see feedback, attempts remaining, and the final score.

```text
F12 → Console
```

## Game Rules

* The computer chooses a random number between 1 and 100.
* You have 10 attempts to guess the correct number.
* The game tells you whether your guess is too high or too low.
* You cannot guess the same number twice.
* Entering an invalid number asks you to try again.
* Closing the prompt cancels the game.

## Features

* Random number generation
* Input validation
* Maximum of 10 attempts
* Too high / too low feedback
* Duplicate guess prevention
* Previous guess tracking
* Score calculation
* Game cancellation support
* Final result message

## Technologies Used

* HTML
* JavaScript

## Files

### `index.html`

Loads the JavaScript game into the browser.

```html
<script src="./js/script.js"></script>
```

### `js/script.js`

Contains the main game functions:

* `generateRandomNumber()`
  Creates a random number between 1 and 100.

* `getPlayerGuess()`
  Gets and validates the player's number input.

* `checkGuess(playerGuess, correctNumber)`
  Checks whether the guess is too low, too high, or correct.

* `game()`
  Starts the game, manages attempts, prevents duplicate guesses, and calculates the final score.

## Scoring

The score depends on how many attempts you use.

```text
Score = (10 - attempts used + 1) × 10
```

The fewer attempts you use, the higher your score.
