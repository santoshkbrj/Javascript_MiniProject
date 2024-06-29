const StartGameBtn = document.getElementById('start-game-btn');

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = "ROCK";
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WIN";
const RESULT_COMPUTER_WINS = "COMPUTER_WIN";

let gameIsRunning = false;

const getPlayerChoice = function () {
    const selection = prompt(`${ROCK}, ${PAPER}, ${SCISSORS}`, '').toUpperCase();
    if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
        alert(`Invalid choice we chose ${DEFAULT_USER_CHOICE} for you as default`);
        return DEFAULT_USER_CHOICE;
    }
    return selection;
}

const getComputerChoice = function () {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS
    }
}

const getWinner = function (cChoice, pChoice) {
    if (cChoice === pChoice) {
        return RESULT_DRAW;
    } else if (
        (cChoice === ROCK && pChoice === PAPER) ||
        (cChoice === PAPER && pChoice === SCISSORS) ||
        (cChoice === SCISSORS && pChoice === ROCK)
    ) {
        return RESULT_PLAYER_WINS;
    } else {
        return RESULT_COMPUTER_WINS;
    }
}

StartGameBtn.addEventListener('click', function () {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log('Game is Running...');
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    console.log(winner)

    let message = `you picked ${playerChoice} and computer picked ${computerChoice}\n`;
    if (winner === RESULT_DRAW) {
        message = message + 'you had a draw';
    } else if (winner === RESULT_PLAYER_WINS) {
        message = message + "you Won the game."
    } else {
        message = message + 'you Lost the game'
    }
    alert(message);
    gameIsRunning = false;
})