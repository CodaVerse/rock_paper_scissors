let playerSelection = ""; // will be passed into the game function based on a button click of ROCK (1), PAPER (2), or SCISSORS (3)
let computerSelection = ""; // a random assignment for computer to pick ROCK, PAPER, or SCISSORS
let playerScore = 0; // how many times the player has bested the computer
let computerScore = 0; // how many times the computer bested the player
let resultsComments = document.getElementById("results-comments").innerHTML

function reset() { // sets up a new game
    location.reload();
}
function updateScores() { // displays the user and computer scores in different <divs>
    document.getElementById("user-score-number").innerHTML = playerScore; //Update current score
    document.getElementById("comp-score-number").innerHTML = computerScore; //Update current score
}
function getComputerSelection() {
    let randomVal = Math.ceil(Math.random() * 3);
    if (randomVal == 1) {
        randomVal = 'ROCK';
    } else if (randomVal == 2) {
        randomVal = 'PAPER';
    } else {
        randomVal = 'SCISSORS'
    }
    return randomVal;
};

function checkScores() {
    if ((playerScore == 5) || (computerScore == 5)) {
        if (playerScore > computerScore) {
            document.getElementById("results-comments").style.color = 'green';
            document.getElementById("results-comments").style.textAlign = 'center';
            document.getElementById("results-comments").style.fontSize = '2rem';
            document.getElementById("results-comments").innerHTML = 'The game is over! YOU\'VE WON!';
        } else {
            document.getElementById("results-comments").style.color = 'red';
            document.getElementById("results-comments").style.textAlign = 'center';
            document.getElementById("results-comments").style.fontSize = '2rem';
            document.getElementById("results-comments").innerHTML = 'The game is over! SORRY! YOU\'VE LOST!';
        }
        document.getElementById("rock").removeEventListener("click", compareHand());
        document.getElementById("paper").removeEventListener("click", compareHand());
        document.getElementById("scissors").removeEventListener("click", compareHand());
    } else { }
    return;
};

function compareHand(playerSelection) { // takes the input of playerSelection from the addEventListener placed on the buttons
    let computerSelection = getComputerSelection();
    if ((playerScore == 5) || (computerScore == 5)) {
        return;
    } else {
        if (playerSelection === computerSelection) {
            document.getElementById("results-comments").innerHTML = `Tie game! You picked ${playerSelection} and the computer picked ${computerSelection}.`;
            updateScores();
        } else if ((playerSelection === 'ROCK') && (computerSelection === 'PAPER')) {
            computerScore++;
            document.getElementById("results-comments").innerHTML = 'You lose! Computer chose Paper.';
            updateScores();
        } else if ((playerSelection === 'ROCK') && (computerSelection === 'SCISSORS')) {
            playerScore++;
            document.getElementById("results-comments").innerHTML = 'You win! Computer chose Scissors and you smashed em up good!';
            updateScores();
        } else if ((playerSelection === 'PAPER') && (computerSelection === 'ROCK')) {
            playerScore++;
            document.getElementById("results-comments").innerHTML = 'You win! Computer chose Rock, and Paper covers Rock.';
            updateScores();
        } else if ((playerSelection === 'PAPER') && (computerSelection === 'SCISSORS')) {
            computerScore++;
            document.getElementById("results-comments").innerHTML = 'Uh oh... Computer chose scissors. Tough luck, Scrappy!';
            updateScores();
        } else if ((playerSelection === 'SCISSORS') && (computerSelection === 'ROCK')) {
            computerScore++;
            document.getElementById("results-comments").innerHTML = 'YIKES! Computer\'s Rock just smashed your Scissors!';
            updateScores();
        } else if ((playerSelection === 'SCISSORS') && (computerSelection === 'PAPER')) {
            playerScore++;
            document.getElementById("results-comments").innerHTML = 'Nice going! You get to cut the Paper all up!';
            updateScores();
        } else {
            alert('Contact the administrator. You\'ve broken everything.');
        };
    };
    console.log(playerSelection);
    console.log(computerSelection);
    checkScores();
};

// Event handlers that will pass the user's choice into the game() function
document.getElementById("rock").addEventListener("click", function () {
    compareHand('ROCK');
});
document.getElementById("paper").addEventListener("click", function () {
    compareHand('PAPER');
});
document.getElementById("scissors").addEventListener("click", function () {
    compareHand('SCISSORS');
});
document.getElementById("begin").addEventListener("click", function () {
    reset();
});