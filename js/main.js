// Main JavaScript File

// GLOBALS
// Target Number to be guessed
var target;
// Low barrier
var low = 0;
// High barrier
var high = 100;

// Random number generator
function loadNumber() {
  // Multiplied by
  target = Math.floor(Math.random() * 101);
  document.getElementById("target").textContent = target;
}

function setBounds() {
  document.getElementById("low").textContent = 0;
  document.getElementById("high").textContent = 100;
}

function setText() {

}

function makeGuess(guess) {
  // if (typeof(guess) != 'int' ) {
  //   alert('Please Enter a number');
  if ((guess < 0) || (guess > 100)) {
    alert('Not in range');
  } else if (guess < target) {
    alert('TOO LOW');
  } else if (guess > target) {
    alert('TOO HIGH');
  } else {
    alert('CORRECT');
    endGame(guess);
  }
}

function endGame(guess) {
  document.getElementById("response").textContent = `You're correct! The answer was ${target}`;
  document.getElementById("question").style.display = 'none';
  document.getElementById("guessForm").style.display = 'none';
  document.getElementById("reset").style.display = 'block';
}

function tooLow() {

}

function tooHigh() {

}

function startGame() {
  loadNumber();
  setBounds();
  setText();
}
