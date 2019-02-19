'use strict';

/*
  Дан список изображений. Сделайте так, чтобы по клику на картинку 
  алертом выводился ее src. Обязательно используйте делегирование событий.
*/

const refs = {
  list: document.querySelector('.images'),
};

const handleClickPicture = ({ target }) => {
  alert(`${target.src}`);
};

refs.list.addEventListener('click', handleClickPicture);
