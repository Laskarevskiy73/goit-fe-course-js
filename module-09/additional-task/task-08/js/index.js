'use strict';

/*
  Напишите скрипт который:
    
    - При фокусе текстового поля, в p.message рендерит строку "Input is in focus!"
    - При наборе текста в инпуте (событие input), текущее его значение должно 
      отображаться в p.input-value 
*/

const refs = {
  input: document.querySelector('.input'),
  message: document.querySelector('.message'),
  inputValue: document.querySelector('.input-value'),
};
// console.log(refs.message);

const handleRenderingString = () => {
  refs.message.textContent = 'Input is in focus!';
};

const handleInputValue = e => {
  refs.inputValue.textContent = `Current input value: ${e.target.value}`;
};

refs.input.addEventListener('focus', handleRenderingString);
refs.input.addEventListener('input', handleInputValue);
