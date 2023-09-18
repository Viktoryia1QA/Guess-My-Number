'use strict';

const generateRandomNumber = function (min = 1, max = 20) {
    return Math.trunc(Math.random() * (max - min + 1)) + min
};


let secretNumber = generateRandomNumber();
console.log(secretNumber);
let score = 20;
let highScore = 0;

const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');

const resultMessage = document.querySelector('.message');

const displayMessage = function (message) {
    resultMessage.textContent = message
};

const gameScore = document.querySelector('.score');
const background = document.querySelector('body');
const gameResult = document.querySelector('.number');
const highScoreResult = document.querySelector('.highscore');
const inputField = document.querySelector('.guess');

checkBtn.addEventListener('click', function () {
    const guess = Number(inputField.value);
    console.log(guess, typeof guess);
    // when there is no input
    if (!guess) {
        displayMessage('No Number!😒');
        //when user wins
    } else if (guess === secretNumber) {
        displayMessage('Great Job! 😍');
        background.style.backgroundColor = '#60b347';
        gameResult.textContent = secretNumber;
        gameResult.style.width = '30rem';
        if (score > highScore) {
            highScore = score;
            highScoreResult.textContent = highScore;
        }
        // when user is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too high!📈' : 'Too low! 📉');
            score -= 1; // score = score - 1;
            gameScore.textContent = score;
        } else {
            displayMessage('You lost the game! 💥');
            background.style.backgroundColor = '#e70d2a';
            gameResult.textContent = '😔';
            gameResult.style.width = '30rem';
            gameScore.textContent = 0;
        }
    }
    //     // Too high
    // } else if (guess > secretNumber) {
    //     if (score > 1) {
    //         resultMessage.textContent = 'Too high!📈';
    //         score -= 1; // score = score - 1;
    //         gameScore.textContent = score;
    //     } else {
    //         resultMessage.textContent = 'You lost the game! 💥';
    //         background.style.backgroundColor = '#e70d2a';
    //         gameResult.textContent = '😔';
    //         gameResult.style.width = '30rem';
    //         gameScore.textContent = 0;
    //     }
    //     //   Too low
    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         resultMessage.textContent = 'Too low! 📉';
    //         score -= 1;
    //         gameScore.textContent = score;
    //     } else {
    //         resultMessage.textContent = 'You lost the game! 💥';
    //         background.style.backgroundColor = '#e70d2a';
    //         gameResult.textContent = '😔';
    //         gameResult.style.width = '30rem';
    //         gameScore.textContent = 0;
    //     }
    // }
})

againBtn.addEventListener('click', function () {
    score = 20;
    secretNumber = generateRandomNumber(1, 20);
    console.log(secretNumber);

    displayMessage('Start guessing...');
    gameScore.textContent = score;
    gameResult.textContent = '?';
    inputField.value = '';
    background.style.backgroundColor = '#222';
    gameResult.style.width = '15rem';
})