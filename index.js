const btn = document.querySelector("button");
const palyerScoreTxt = document.querySelector(".playerScore");
const computerScoreTxt = document.querySelector(".computerScore");

let palyerScore = 0;
let computerScore = 0;

btn.addEventListener("click", handler);

function handler () {
  let playerOne = prompt("player one type your move");
  let computerPlayer = null;

// generate random number

let randonNumber = Math.floor(Math.random() * 3) + 1;

if (randonNumber === 1) {
   computerPlayer = "scissors";
} else if (randonNumber === 2) {
   computerPlayer = "rock";
} else {
   computerPlayer = "paper";
};


// Game

// if palyer one type scissors

if (playerOne === "scissors") {
    if (computerPlayer === "rock"){
        computerScore += 1;
        computerScoreTxt.innerHTML = computerScore;
        alert("computer won");
    } else if (computerPlayer === "paper") {
        palyerScore += 1;
        palyerScoreTxt.innerHTML = palyerScore;
        alert("player one won");
    } else {
        alert("draw");
    }
};

// if palyer one type rock

if (playerOne === "rock") {
    if (computerPlayer === "paper"){
        computerScore += 1;
        computerScoreTxt.innerHTML = computerScore;
        alert("computer won");
    } else if (computerPlayer === "scissors") {
        palyerScore += 1;
        palyerScoreTxt.innerHTML = palyerScore;
        alert("player one won");
    } else {
        alert("draw");
    }
};

// if palyer one type paper

if (playerOne === "paper") {
    if (computerPlayer === "scissors"){
        computerScore += 1;
        computerScoreTxt.innerHTML = computerScore;
        alert("computer won");
    } else if (computerPlayer === "rock") {
        palyerScore += 1;
        palyerScoreTxt.innerHTML = palyerScore;
        alert("player one won");
    } else {
        alert("draw");
    }
};

// counter

if (palyerScore > 1 || computerScore > 1){
    palyerScore = 0;
    computerScore = 0;
    palyerScoreTxt.innerHTML = palyerScore;
    computerScoreTxt.innerHTML = computerScore;
   if (palyerScore > computerScore){
    alert("Player won the game")
   } else {
    alert("Computer won the game")
   };
}

};


