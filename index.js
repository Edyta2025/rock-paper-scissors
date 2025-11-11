let playerOne = prompt("player one type your move");
let playerTwo = prompt("player two type your move");


// if palyer one type scissors

if (playerOne === "scissors") {
    if (playerTwo === "rock"){
        alert("player two won");
    } else if (playerTwo === "paper") {
        alert("player one won");
    } else {
        alert("draw");
    }
};

// if palyer one type rock

if (playerOne === "rock") {
    if (playerTwo === "paper"){
        alert("player two won");
    } else if (playerTwo === "scissors") {
        alert("player one won");
    } else {
        alert("draw");
    }
};

// if palyer one type paper

if (playerOne === "paper") {
    if (playerTwo === "scissors"){
     alert("player two won");
    } else if (playerTwo === "rock") {
        alert("player one won");
    } else {
        alert("draw");
    }
};


