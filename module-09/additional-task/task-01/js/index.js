'use strict';

/*
  Напишите скрипт который реализует следующий функционал.
  
  Есть кнопка с классом button, текст которой отображает 
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/

let count = 0;

const ref = {
  button: document.querySelector('.button'),
};

const handleButtonClick = evt => {
  console.log((evt.target.textContent = `${(count += 1)}`));
};

ref.button.addEventListener('click', handleButtonClick);
