let computerPicks;
let playerPicks;

let playerScore = document.getElementById("playerScoreTable");
let drawScore = document.getElementById("drawTable");
let computerScore = document.getElementById("computerScoreTable");

let result = document.getElementById("resultMessage");

//The event listeneres and functions determines the players choice.
document.getElementById("Rock").addEventListener("click", rockSelection);
document.getElementById("Paper").addEventListener("click", paperSelection);
document.getElementById("Scissors").addEventListener("click", scissorsSelection);

function rockSelection() {
    playerPicks = Rock;
}

function paperSelection() {
    playerPicks = Paper;
}

function scissorsSelection() {
    playerPicks = Scissors;
}

//This function determines what option the computer will pick by randomly generating a number.
function computerSelection() {
    let randomNum = Math.random();
    let fullNum = randomNum * 10;
    let wholeNum = Math.floor(fullNum);
    if (wholeNum === 0){
        wholeNum = 1;
    }
    if (wholeNum >= 1 && wholeNum <= 3) { 
        computerPicks = Rock;
    } else if (wholeNum > 3 && wholeNum <= 6) {
        computerPicks = Paper;
    } else {
        computerPicks = Scissors;
    }
    return computerPicks;
}

//This section of JavaScript adds event listeners to the options so that the round begins
document.getElementById("Rock").addEventListener("click", playRound);
document.getElementById("Paper").addEventListener("click", playRound);
document.getElementById("Scissors").addEventListener("click", playRound);

function playRound() {
    computerSelection();

    if (computerPicks === Rock && playerPicks === Scissors) {
        result.innerHTML = "The computer picked Rock, you lose this round!";
        computerScore.innerHTML = parseInt(computerScore.innerHTML)+1;
        
    } else if (computerPicks === Scissors && playerPicks === Rock) {
        result.innerHTML = "The computer picked Scissors and wins this round!";
        playerScore.innerHTML = parseInt(playerScore.innerHTML)+1;
        
    } else if (computerPicks === Scissors && playerPicks === Paper) {
        result.innerHTML = "The computer picked Scissors, you lose this round!";
        computerScore.innerHTML = parseInt(computerScore.innerHTML)+1;
        
    } else if (computerPicks === Paper && playerPicks === Scissors) {
        result.innerHTML = "The computer picked Paper, you win this round!";
        playerScore.innerHTML = parseInt(playerScore.innerHTML)+1;
        
    } else if (computerPicks === Paper && playerPicks === Rock) {
        result.innerHTML = "The computer picked Paper, you win this round!";
        playerScore.innerHTML = parseInt(playerScore.innerHTML)+1;
        
    } else if (computerPicks === Rock && playerPicks === Paper) {
        result.innerHTML = "The computer picked Rock, you lose this round!";
        computerScore.innerHTML = parseInt(computerScore.innerHTML)+1;
        
    } else if (computerPicks === playerPicks) {
        result.innerHTML = "Your choice is the same as the Computers, it's a draw!";
        drawScore.innerHTML = parseInt(drawScore.innerHTML)+1;
    }
    checkScore();
}

function checkScore() {
    if (computerScore.innerHTML === "5"){
        result.innerHTML = "The computer won 5 points before you could!";
        scoreReset();
    } else if (playerScore.innerHTML === "5") {
        result.innerHTML = "You scored 5 points and won! Congratulations!";
        scoreReset();
    } else if (drawScore.innerHTML === "5"){
        result.innerHTML = "It's a draw!"
        scoreReset();
    }
}

function scoreReset() { //I set up the scoreReset function so I did not have to repeat the same lines of code over and over in the checkScore function.
    drawScore.innerHTML = 0;
    playerScore.innerHTML = 0;
    computerScore.innerHTML = 0;
}