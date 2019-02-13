'use strict';

/*
  Дан ul склассом .list и массив строк. 
  
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/

const elements = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Node',
  'Angular',
  'Vue.js',
];

const list = document.querySelector('.list');

const createListing = (list, elem) => {
  elem.map(item => {
    const createElementTolist = document.createElement('li');
    createElementTolist.textContent = item;

    list.append(createElementTolist);
  });
};

createListing(list, elements);

//=============================================================================
