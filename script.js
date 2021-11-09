let playerSelection = "";
let computerSelection = "";
let playerScore = 0;
let computerScore = 0;
let round = 1;
let gameOver = false;

// Storing the user and computer's decisions
function userPlay() {
 while (playerSelection.toLowerCase() !== "rock" && playerSelection.toLowerCase() !== "paper" && playerSelection.toLowerCase() !== "scissors") {
  playerSelection = prompt("Rock, Paper, or Scissors? ");
 }
}

function computerPlay() {
 const rps = ["Rock", "Paper", "Scissors"];
 computerSelection = rps[Math.floor(Math.random() * rps.length)];
}

// Determines if the user won
function youWin(playerSelection, computerSelection) {
 if ((playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors") || (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper") || (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock")) {
  return true;
 }
}

// Determining who wins
function whoWins() {
 if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
  alert("It's a draw.");
  console.log(`Round ${round} ended in a draw, since both players chose ${computerSelection}.`);
  console.log("");
  playerSelection = "";
 } else if (youWin(playerSelection, computerSelection)) {
  playerScore += 1;
  alert("You Won!");
  console.log(`You won round ${round}, since you chose ${playerSelection} and the computer chose ${computerSelection}.`);
  console.log("");
  playerSelection = "";
 } else {
  computerScore += 1;
  alert("You Lost!");
  console.log(`You lost round ${round}, since you chose ${playerSelection} and the computer chose ${computerSelection}.`);
  console.log("");
  playerSelection = "";
 }
}

function playRound() {
  userPlay();
  computerPlay();
  whoWins();
}

function game() {
  alert(`Round ${round}.`);
  playRound();
  round += 1;
}

while (!gameOver) {
  game();
}

console.log("");
console.log("");
console.log("");

if (playerScore == computerScore) {
  console.log(`This game is a draw, since you both scored ${playerScore} points.`);
} else if (playerScore > computerScore) {
  console.log(`Congratulations, you won the game by a score of ${playerScore}-${computerScore}.`);
} else {
  console.log(`You lost the game by a score of ${playerScore}-${computerScore}.`);
}

const button1 = document.createElement('button'); 
const button2 = document.createElement('button'); 
const button3 = document.createElement('button'); 

