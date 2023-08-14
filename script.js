"use strict";

const againButton = document.querySelector(".again");
const numberEl = document.querySelector(".number");
const guessInput = document.querySelector(".guess");
const checkButton = document.querySelector(".check");
const messageEl = document.querySelector(".message");
const scoreEl = document.querySelector(".score");
const highscoreEl = document.querySelector(".highscore");
const bodyEl = document.body;


let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
checkButton.addEventListener('click', game);

guessInput.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        game();
    }
})

againButton.addEventListener('click', () => {
    score = 20;
    secretNumber = Math.floor(Math.random() * 20) + 1;
    messageEl.textContent = "Start Guessing...";
    scoreEl.textContent = score;
    numberEl.textContent = '?';
    numberEl.style.width = '150px';
    bodyEl.style.backgroundColor = '#222';
    guessInput.value = '';
})

function game() {
    const guess = parseInt(guessInput.value);

    if (!guess) {
        messageEl.textContent = ' ⛔ No Number';
    } else if (guess === secretNumber) {
        messageEl.textContent = '🎉 Correct Number';
        bodyEl.style.backgroundColor = 'Green';
        numberEl.style.width = '300px';
        numberEl.textContent = secretNumber;

        if (score > highscore) {
            highscore = score;
            highscoreEl.textContent = highscore;
        }
    } else if (guess > secretNumber) {
        if (score > 1) {
            messageEl.textContent = '📈 Too High!';
            score--;
            scoreEl.textContent = score;
        } else {
            messageEl.textContent = '😭 You Lost the Game';
            scoreEl.textContent = 0;
        }
    } else if (guess < secretNumber) {
        if (score > 1) {
            messageEl.textContent = '📉 Too Low';
            score--;
            scoreEl.textContent = score;
        } else {
            messageEl.textContent = '😭 You Lost the Game';
            scoreEl.textContent = 0;
        }
    }
}