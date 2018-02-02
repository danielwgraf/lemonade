// Main JavaScript File

// GLOBALS
// Target Number to be guessed
var target;
// Low barrier
var low = 0;
// High barrier
var high = 100;

function startGame() {
  loadNumber();
  setBounds();
  setText();
}

// Random number generator
function loadNumber() {
  // Multiplied by
  target = Math.floor(Math.random() * 101);
  document.getElementById("target").textContent = target;
}

// Sets the initial bounds
function setBounds() {
  document.getElementById("low").textContent = low;
  document.getElementById("high").textContent = high;
}

// Sets the initial text
function setText() {
    document.getElementById("response").textContent = '';
    document.getElementById("guess").value = '';
    document.getElementById("question").style.display = 'block';
    document.getElementById("guessForm").style.display = 'block';
    document.getElementById("reset").style.display = 'none';
}

// Runs when player makes a guess
function makeGuess(guess) {
  // if (typeof(guess) != 'int' ) {
  //   alert('Please Enter a number');
  if ((guess < 0) || (guess > 100)) {
    alert('Not in range');
  } else if (guess < target) {
    alert('TOO LOW');
    tooLow(guess);
  } else if (guess > target) {
    alert('TOO HIGH');
    tooHigh(guess);
  } else {
    alert('CORRECT');
    endGame(guess);
  }
}

// Runs when player wins
function endGame(guess) {
  document.getElementById("response").textContent = `You're correct! The answer was ${target}`;
  document.getElementById("question").style.display = 'none';
  document.getElementById("guessForm").style.display = 'none';
  document.getElementById("reset").style.display = 'block';
}

// Runs when player's guess is too low
function tooLow(guess) {
  low = guess;
  setBounds();
}

// Runs when player's guess is too high
function tooHigh(guess) {
  high = guess;
  setBounds();
}
