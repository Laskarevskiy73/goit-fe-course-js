'use strict';

/*
  task-01

  Есть список категорий с классом categories (на вкладке HTML).
  
  Напишите код, который для каждого элемента li (первая вложенность) 
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li
  
  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/

console.log(document.body.firstElementChild.children[0].firstChild);
console.log(
  document.body.firstElementChild.children[0].firstElementChild.children.length,
);

//=============================================================================
