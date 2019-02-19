'use strict';

/*
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Обязательно используйте делегирование событий.
*/

const refs = {
  list: document.querySelector('.list'),
  element: document.querySelectorAll('button[data-action]'),
};
// console.log(refs.element);

const handleListItem = e => {
  if (e.target.nodeName !== 'BUTTON') return;

  e.target.parentElement.remove();
};

refs.list.addEventListener('click', handleListItem);
