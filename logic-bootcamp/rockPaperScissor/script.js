const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const resultText = document.getElementById("result");
const reset = document.getElementById("reset");
const updateUserScore = document.getElementById("userScore");
const updateComputerScore = document.getElementById("computerScore");

let userScore = 0;
let computerScore = 0;
let result = "";

function playGame(userChoice) {
  const choice = ["rock", "paper", "scissors"];
  const generateComputerRandomChoice = Math.floor(
    Math.random() * choice.length
  );
  const computerChoice = choice[generateComputerRandomChoice];

  if (userChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "You win!";
    userScore++;
  } else {
    result = "Computer wins!";
    computerScore++;
  }

  updateUi();
  disableButtons(true);
}

rock.addEventListener("click", () => playGame("rock"));
paper.addEventListener("click", () => playGame("paper"));
scissors.addEventListener("click", () => playGame("scissors"));
reset.addEventListener("click", () => {
  userScore = 0;
  computerScore = 0;
  updateUi();
  resultText.textContent = "Scores reset. Let's play again!";
  disableButtons(false);
});

function disableButtons(disabled) {
  rock.disabled = disabled;
  paper.disabled = disabled;
  scissors.disabled = disabled;
}

function updateUi() {
  updateUserScore.textContent = `User score: ${userScore}`;
  updateComputerScore.textContent = `Computer score: ${computerScore}`;
  resultText.textContent = `${result}`;
}
