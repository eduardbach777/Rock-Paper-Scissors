// Get all the elements we need
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const resetBtn = document.getElementById('reset-btn');
const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');
const resultMessage = document.getElementById('result-message');
const choicesMessage = document.getElementById('choices-message');

// Keep track of scores
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

// Reset button
resetBtn.addEventListener('click', function() {
    resetGame();
});

// Computer makes random choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// Play one round
function playRound(playerChoice) {
    // Check if game is already over
    if (playerScore === 5 || computerScore === 5) {
        return;
    }

    const computerChoice = getComputerChoice();
    
    // Show what was chosen
    choicesMessage.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}`;
    
    // Determine winner
    let result = '';
    
    // Check for tie
    if (playerChoice === computerChoice) {
        result = "It's a tie!";
        resultMessage.textContent = result;
        resultMessage.className = '';
    }
    // Check if player wins
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
    // Otherwise computer wins
    else {
        result = 'Computer wins this round!';
        computerScore++;
        computerScoreElement.textContent = computerScore;
        resultMessage.textContent = result;
        resultMessage.className = 'loser';
    }
    
    // Check if someone won the game
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

// Reset the game
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
