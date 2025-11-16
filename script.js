// Elemente
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const resetBtn = document.getElementById('reset-btn');
const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');
const resultMessage = document.getElementById('result-message');
const choicesMessage = document.getElementById('choices-message');

// Score keep track
let playerScore = 0;
let computerScore = 0;

// Add click listeners to the choice buttons
rockBtn.addEventListener('click', function() {
    playRound('rock');
});

paperBtn.addEventListener('click', function() {
    playRound('paper');
});

scissorsBtn.addEventListener('click', function() {
    playRound('scissors');
});

// Reset Button
resetBtn.addEventListener('click', function() {
    resetGame();
});

// Random choice normal
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

//  Normale Runde
function playRound(playerChoice) {
    //  If function für Score
    if (playerScore === 5 || computerScore === 5) {
        return;
    }

    const computerChoice = getComputerChoice();
    
    // Display Auswahl
    choicesMessage.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}`;
    
    //  Gewinner anzeigen
    let result = '';
    
    // Unentschieden
    if (playerChoice === computerChoice) {
        result = "It's a tie!";
        resultMessage.textContent = result;
        resultMessage.className = '';
    }
    // Player Gewinn
    else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You win this round!';
        playerScore++;
        playerScoreElement.textContent = playerScore;
        resultMessage.textContent = result;
        resultMessage.className = 'winner';
    }
    // Computer Win
    else {
        result = 'Computer wins this round!';
        computerScore++;
        computerScoreElement.textContent = computerScore;
        resultMessage.textContent = result;
        resultMessage.className = 'loser';
    }
    
    // Check wer Gewonnen hat
    if (playerScore === 5) {
        resultMessage.textContent = '🎉 You won the game! 🎉';
        resultMessage.className = 'winner';
        choicesMessage.textContent = 'Click Play Again to start a new game';
        resetBtn.classList.add('show');
    } else if (computerScore === 5) {
        resultMessage.textContent = '💔 Computer won the game! 💔';
        resultMessage.className = 'loser';
        choicesMessage.textContent = 'Click Play Again to start a new game';
        resetBtn.classList.add('show');
    }
}

// Spiel resetten
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreElement.textContent = '0';
    computerScoreElement.textContent = '0';
    resultMessage.textContent = 'Choose your weapon!';
    resultMessage.className = '';
    choicesMessage.textContent = '';
    resetBtn.classList.remove('show');
}
