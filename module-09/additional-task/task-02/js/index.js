'use strict';

/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
  получите числа которые бьудут введены в инпуты и запишите их сумму в span.result.
*/

const refs = {
  button: document.querySelector('button[data-action]'),
  expression: document.querySelectorAll('.expression > input'),
  result: document.querySelector('.result'),
};

const handleAddingNumbers = () => {
  const result =
    Number(refs.expression[0].value) + Number(refs.expression[1].value);

  console.log((refs.result.textContent = `${result}`));
};

refs.button.addEventListener('click', handleAddingNumbers);
