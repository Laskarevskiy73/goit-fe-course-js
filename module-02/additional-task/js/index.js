/*
    task-01

  Есть массив имен пользователей.
  В первом console.log вывести длину массива.
  
  В последующих console.log дополнить конструкцию
  так, чтобы в консоль вывелись указаные в комментариях 
  элементы массива.
*/

// const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

// console.log(`Users length: ${users.length}`); // 4

// console.log(users[1]); // Poly
// console.log(users[3]); // Chelsey
// console.log(users[0]); // Mango
// console.log(users[2]); // Ajax

//=============================================================================

/*
    task-02

/* Есть массив имен пользователей */

// const users = ["Mango", "Poly", "Ajax", "Chelsey"];

// /* Используя методы массива, последовательно выполнить следующие операции */

// // Удалить из начала массива нулевой элемент
// console.log(users.shift()); // ["Poly", "Ajax", "Chelsey"]
// console.log(`Users: ${users}`);

// // Удалить из конца массив последний элемент
// console.log(users.pop()); // ["Poly", "Ajax"]
// console.log(`Users: ${users}`);

// // Добавить в начало массива любое имя
// console.log(users.unshift('Kongo')); // ["добавленое имя", "Poly", "Ajax"]
// console.log(`Users: ${users}`);

// // Добавить в конец массива два любых имени за одну операцию
// console.log(users.push('Mango', 'Chelsey')); //  ["добавленое ранее имя", "Poly", "Ajax", "имя 1", "имя 2"]
// console.log(`Users: ${users}`);

//=============================================================================

/* 
    task-03

    Попросить пользователя ввести произвольную строку
    и записать ее в переменную string
  
  PS: для перебора массива используте цикл for или for...of

*/

// let string = prompt('Введите произвольную строку!'); // Привет! Мне нравится кодить!
// let arr;

// // Разбить строку в массив, пусть разделителем будет пробел, и записать в переменную arr
// arr = string.split(' ');
// console.log(arr);

// // Вывести в консоли общую длину массива arr
// console.log('arr length: ', arr.length);

// // Используя цикл, вывести в консоль все индексы массива arr
// for (let i = 0; i < arr.length; i += 1) {
//   console.log('index i: ', i);
// }

// // Используя цикл, вывести в консоль все элементы массива arr
// for (let element of arr) {
//   console.log('element: ', element);
// }

// // Используя цикл, вывести в консоли все пары индекс:значение массива arr
// for (let i = 0; i < arr.length; i += 1) {
//   console.log(`${i} : ${arr[i]}`);
// }

//=============================================================================

/*
    task-06

  Напишите скрипт, который выбирает из массива numbers 
  все числа, которые больше чем значение переменной num, 
  записывая эти числа в массив newArray.
      
  В результате в массиве newArray будут все подходяшие числа.
      
  PS: используйте цикл for или for...of и оператор ветвления if

*/

// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// const num = 10;
// const newArray = [];

// for (const element of numbers) {
//   if (element > num) {
//     newArray.push(element);
//   }
// }

// console.log('Numbers: ', numbers);
// console.log('newArray: ', newArray);

//=============================================================================

/*
    task-07

  Напишите скрипт, который проверяет произвольную строку 
  в переменной string и находит в ней самое длинное слово,
  записывая его в переменную longestWord.

*/

// const string = 'May the force be with you';
// const arrFromString = string.split(' ');
// let longestWord = arrFromString[0];

// for (const element of arrFromString) {
//   if (longestWord.length < element.length) {
//     longestWord = element;
//   }
// }

// console.log(longestWord); // 'force'

//=============================================================================
