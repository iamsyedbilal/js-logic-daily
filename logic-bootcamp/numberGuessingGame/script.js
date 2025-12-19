const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const feedback = document.getElementById("feedback");
const turnCount = document.getElementById("turnCount");
const resetButton = document.getElementById("resetButton");

let randomNumber = Math.floor(Math.random() * 20 + 1);
let userMaxAttempts = 5;

function updateAttempts() {
  turnCount.innerText = `Attempts Left ${userMaxAttempts}`;
}

function disableUi() {
  guessInput.disabled = true;
  guessButton.disabled = true;
}

function playGame() {
  const guess = Number(guessInput.value);

  if (!guess || guess < 1 || guess > 20) {
    feedback.innerText = "Please enter a number between 1 and 20.";
    feedback.style.color = "red";
    return;
  }

  userMaxAttempts--;
  updateAttempts();

  if (guess === randomNumber) {
    feedback.innerText = `Correct! You guessed the number with ${userMaxAttempts} attempts left.`;
    feedback.style.color = "green";
    disableUi();
    return;
  }

  if (userMaxAttempts === 0) {
    feedback.innerText = `Game Over! The correct number was ${randomNumber}.`;
    feedback.style.color = "red";
    disableUi();
    return;
  }

  feedback.textContent = guess < randomNumber ? "Too Low" : "Too High";
  feedback.style.color = "orange";
}

guessButton.addEventListener("click", function () {
  playGame();
});

resetButton.addEventListener("click", function () {
  randomNumber = Math.floor(Math.random() * 20 + 1);
  userMaxAttempts = 5;
  guessInput.value = "";
  feedback.innerText = "";
  guessInput.disabled = false;
  guessButton.disabled = false;
  updateAttempts();
});
