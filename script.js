'use strict';

const diceEl = document.querySelector('.dice');
const playerEl = document.querySelectorAll('.player');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const score = [0, 0];

let currentScore = 0;
let currentPlayer = 0;

//roll dice
let diceNum = null;
const rollDice = function () {
  diceNum = Math.trunc(Math.random() * 6 + 1);
  diceEl.src = `dice-${diceNum}.png`;
  diceEl.classList.remove('hidden');
  if (diceNum === 1) {
    currentScore = 0;
    switchPlayer();
  } else {
    currentScore += diceNum;
  }
  document.querySelector(`#current--${currentPlayer}`).innerText = currentScore;
};

//Switch player
const switchPlayer = function () {
  score[currentPlayer] += currentScore;
  if (score[currentPlayer] >= 100) {
    alert(`Player${currentPlayer + 1} win!!!!`);
  }
  currentScore = 0;
  document.querySelector(`#current--${currentPlayer}`).innerText = 0;
  document.querySelector(`#score--${currentPlayer}`).innerText =
    score[currentPlayer];
  playerEl[currentPlayer].classList.remove('player--active');
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  playerEl[currentPlayer].classList.add('player--active');
};

//Reset the game
const newGame = function () {
  score[0] = 0;
  score[1] = 0;
  currentScore = 0;
  current0El.innerText = 0;
  current1El.innerText = 0;
  score0El.innerText = 0;
  score1El.innerText = 0;
  playerEl[0].classList.add('player--active');
  playerEl[1].classList.remove('player--active');
};

//add eventlistener to all btns.
document.querySelector('.btn--roll').addEventListener('click', rollDice);
document.querySelector('.btn--hold').addEventListener('click', switchPlayer);
document.querySelector('.btn--new').addEventListener('click', newGame);
