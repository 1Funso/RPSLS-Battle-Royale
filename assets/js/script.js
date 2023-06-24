/* Initialize global variables for player's name, number of rounds played, score and player choices */
let playerName;
let rounds = 0;
let score = 0;
let playerChoices = [];

/* Function to start the game */
function startGame() {
    console.log("startGame function is being called");
    playerName = document.getElementById('playerName').value;
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('gameScreen').style.display = 'block';
    document.getElementById('player').textContent = playerName;
    document.getElementById('player').innerHTML += "<br><br><br>Make your move by clicking one of the following buttons:";
}

/* Function to play a round of the game */
function playRound(playerChoice) {
    playerChoices.push(playerChoice);
    rounds++;
    document.getElementById('rounds').textContent = 'Round: ' + rounds;
    let computerChoice = getComputerChoice();
    document.getElementById('choice').textContent = playerName + ', you chose ' + playerChoice + ', Computer chose ' + computerChoice;
    let result = checkWinner(playerChoice, computerChoice);
    if (result === 'win') {
        score++;
        document.getElementById('result').textContent = 'You Win!';
    } else if (result === 'lose') {
        document.getElementById('result').textContent = 'You Lose!';
    } else {
        document.getElementById('result').textContent = 'Draw!';
    }
    document.getElementById('score').textContent = 'Score: ' + score;
    if (rounds === 10) {
        document.getElementById('gameScreen').style.display = 'none';
        document.getElementById('endScreen').style.display = 'block';
        document.getElementById('finalScore').textContent = playerName + ', your final score is: ' + score;
    }
}

/* Function to check the winner */
function checkWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'draw';
    }

    if (
        (playerChoice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
        (playerChoice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
        (playerChoice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
        (playerChoice === 'lizard' && (computerChoice === 'paper' || computerChoice === 'spock')) ||
        (playerChoice === 'spock' && (computerChoice === 'rock' || computerChoice === 'scissors'))
    ) {
        return 'win';
    } else {
        return 'lose';
    }
}

/* Function to generate a random choice for the computer */
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

/* Function to reset the game */
function resetGame() {
    playerName = '';
    rounds = 0;
    score = 0;
    playerChoices = [];
    document.getElementById('playerName').value = '';
    document.getElementById('rounds').textContent = 'Round: 0';
    document.getElementById('score').textContent = 'Score: 0';
    document.getElementById('choice').textContent = '';
    document.getElementById('result').textContent = '';
    document.getElementById('finalScore').textContent = '';
    document.getElementById('endScreen').style.display = 'none';
    document.getElementById('startScreen').style.display = 'block';
}
