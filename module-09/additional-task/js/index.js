'use strict';

const refs = {
  btn: document.querySelector('button'),
};
// const btn = document.querySelector('button');
// console.log(btn);

refs.btn.addEventListener('click', event => {
  console.log(event);

  console.log('You, click! +) ');
});
