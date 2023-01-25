import { wordLength, ALL_WORDS } from './constants';

const aleatoryWord = () => {
  let correctWord = ALL_WORDS[Math.floor(Math.random() * ALL_WORDS.length)];
  return correctWord;
};

let correctAnswer = aleatoryWord();
let currentRow = 0;
let f = 0;
const getAnswer = (answer, gameContainer) => {
  if (answer.length !== 5) return;
  console.log(correctAnswer);
  for (let i = 0; i < answer.length; i++) {
    let howManyLetters = 0;
    gameContainer.children[currentRow].children[i].textContent = answer[i];
    if (answer[i] === correctAnswer[i]) {
      gameContainer.children[currentRow].children[i].classList.add('correct');
      f++;
    }
    if (!correctAnswer.includes(answer[i])) {
      gameContainer.children[currentRow].children[i].classList.add('no');
    }

    for (let j = 0; j < answer.length; j++) {
      if (answer[i] === correctAnswer[j]) {
        howManyLetters++;
      }
    } //for de j

    console.log(howManyLetters);
    for (let l = 0; l < correctAnswer.length; l++) {
      if (
        answer[i] === correctAnswer[l] &&
        !gameContainer.children[currentRow].children[i].classList.contains(
          'correct'
        ) &&
        howManyLetters >= f
      ) {
        gameContainer.children[currentRow].children[i].classList.add('another');
        f++;
      } //if
    } //for de l
    if (
      !gameContainer.children[currentRow].children[i].classList.contains(
        'another'
      ) &&
      !gameContainer.children[currentRow].children[i].classList.contains(
        'correct'
      )
    ) {
      gameContainer.children[currentRow].children[i].classList.add('no');
    }
  } //for de i
  currentRow++;
};

export { getAnswer };
