'use strict';

let btnAgain = document.querySelector('.again');
let btnGuess = document.querySelector('.check');
let inputGuess = document.querySelector('.guess');
let number = document.querySelector('.number');
let message = document.querySelector('.message');
let score = document.querySelector('.score');
let highScore = document.querySelector('.highscore');
let error = document.querySelector('.between');

let scoreInit = 20;
let newScore = 0;
//find random number
const randomnumberFunction = () => {
  return Math.floor(Math.random() * 20 + 1);
};
//check if the game is finished
let checkScore = scoreInit => {
  if (scoreInit === 0) {
    message.textContent = `Your lost, Press again button to play again`;
    btnGuess.disabled = true;
  }
};
//init the game
let startTheGame = () => {
  scoreInit = 20;

  number.value = randomnumberFunction();

  message.innerHTML = `Start guessing...`;
  score.innerHTML = scoreInit;
  document.body.style.backgroundColor = 'black';
  btnGuess.disabled = false;
  inputGuess.value = '';
};

let playTheGame = () => {
  //every click the score drops

  scoreInit--;
  let randomNumberValue = +number.value;

  let userGuess = +inputGuess.value;

  score.textContent = scoreInit;

  if (!userGuess || userGuess > 20 || userGuess <= 0) {
    message.innerHTML = `Guess a number between 1 and 20`;
  }

  checkScore(scoreInit);
  if (userGuess === randomNumberValue) {
    document.body.style.backgroundColor = 'green';
    if (scoreInit > newScore) {
      newScore = scoreInit;
      highScore.innerHTML = newScore;
    }
    message.textContent =
      'Congratulations... You found it, Press again button to play again ';
    btnGuess.disabled = true;
  }
  if (userGuess > randomNumberValue) {
    message.textContent = `Your guess is to high`;
  }
  if (userGuess < randomNumberValue) {
    message.textContent = `Your guess is to low`;
  }
};

//start game
startTheGame();

//play again
btnAgain.addEventListener('click', startTheGame);
//play the game
btnGuess.addEventListener('click', playTheGame);
