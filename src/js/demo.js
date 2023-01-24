const rootStyles = document.documentElement.style;
import { wordLength } from './constants';

rootStyles.setProperty('--number-of-letters', wordLength);

const createBoxes = container => {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 5; i++) {
    const rowBox = document.createElement('div');
    rowBox.classList.add('row');

    for (let i = 0; i < wordLength; i++) {
      const letterBox = document.createElement('div');
      letterBox.classList.add('letter__box');
      rowBox.append(letterBox);
    }
    fragment.append(rowBox);
  }
  container.append(fragment);
};

export { createBoxes };
