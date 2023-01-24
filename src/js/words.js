import { wordLength } from './constants';

const getAnswer = (answer, gameContainer) => {
  if (answer.length !== 5) return;
  for (let i = 0; i < answer.length; i++) {
    gameContainer.children[0].children[i].textContent = answer[i];
  }
};

export { getAnswer };
