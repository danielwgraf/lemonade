// Main JavaScript File

// GLOBALS
// Target Number to be guessed
var target;
// Low barrier
var low
// High barrier
var high;

function startGame() {
  // Initial Bounds
  low = 0;
  high = 100;
  // Start/Clean functions
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
  setBarBounds();
}

// Sets the bar's changing bounds
function setBarBounds() {
  // document.getElementById("lowshow").textContent=low;
  // document.getElementById("highshow").textContent=high;
  document.getElementById("barGuessRange").style.marginLeft = `${low*10}px`;
  document.getElementById("barGuessRange").style.marginRight = `${(100-high)*10}px`;
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
  if ((guess < low) || (guess > high)) {
    alert('Number not in range');
  } else if (guess < target) {
    tooLow(guess);
  } else if (guess > target) {
    tooHigh(guess);
  } else if (guess == target) {
    alert('CORRECT');
    endGame(guess);
  } else {
    alert('Please Enter an actual number');
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
  document.getElementById("response").textContent = `${guess} was too low! Try again!\n`;
  low = guess;
  setBounds();
}

// Runs when player's guess is too high
function tooHigh(guess) {
  document.getElementById("response").textContent = `${guess} was too high! Try again!\n`;
  high = guess;
  setBounds();
}
