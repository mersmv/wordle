// El styles lo importamos aquí, ya se carga después al compilar todo

// los imports:

import '../scss/styles.scss';
import { createBoxes } from './demo.js';
import { getAnswer } from './words';

//declarar:

const gameContainer = document.getElementById('game-container');
const form = document.getElementById('form');

//eventos:

form.addEventListener('submit', e => {
  e.preventDefault();
  let answer = e.target.word.value;
  getAnswer(answer, gameContainer);
});

//llamada a funciones:

createBoxes(gameContainer);
