/*
    task-01

  Напишите скрипт, который, для объекта user, последовательно: 
  
    - добавляет поле mood со значением 'happy'
    
    - заменяет значение hobby на 'javascript'
    
    - удаляет свойство premium
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя цикл for...in
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.keys и for...of
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.entries и for...of

*/

// const user = {
//     name: "Mango",
//     age: 20,
//     hobby: "html",
//     premium: true
// };
// console.log(user);


// user.mood = 'happy';
// console.log(user);

// user.hobby = 'javascript';
// console.log(user);

// delete user.premium;
// console.log(user);

// {
//     console.group('@======================');
//     for (const obj in user) {
//         console.log(`${obj} : ${user[obj]}`);
//     }
//     console.groupEnd('@======================');
// }

// //
// //
// //

// {
//     const newObj = Object.keys(user);

//     console.group('@======================');
//     for (let value of newObj) {

//         console.log(`${value} : ${user[value]}`);
//     }
//     console.groupEnd('@======================');
// }
// //
// //
// //

// {
//     const newObj = Object.entries(user);

//     console.group('@======================');
//     for (let value of newObj) {
//         const values = value.join(' : ');

//         console.log(`${values}`);

//     }
//     console.groupEnd('@======================');

// }

//=============================================================================


/*
    task-02

  Напиште скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"

*/

// const tasksCompleted = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99
// };

// const values = Object.values(tasksCompleted);
// let maxValue = values[0];


// for (let value of values) {

//   if (value > maxValue) {
//     maxValue = value;
//   }
// }

// for (let value in tasksCompleted) {

//   if (tasksCompleted[value] === maxValue) {
//     console.log(`Maximum number of tasks made : ${value} - ${tasksCompleted[value]}`);
//   }
// }
// console.log(tasksCompleted);

//=============================================================================


/*
  task-03

  Напишите функцию countProps(obj),
  считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.

*/

// const countProps = obj => {

//   const keys = Object.entries(obj);

//   return keys.length;

// }

// // Вызовы функции для проверки
// console.log(
//   countProps({})
// ); // 0

// console.log(
//   countProps({
//     a: 1,
//     b: 3,
//     c: 'hello'
//   })
// ); // 3

//=============================================================================


/*
  task-04

  Создайте функцию isObjectEmpty(obj), которая получает 
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  
  Возвращает true если объект пустой, false если не пустой.

*/

// const isObjectEmpty = obj => {

//   const values = Object.entries(obj);
//   const resultObj = values.length === 0;

//   return resultObj;
// }

// // Вызовы функции для проверки
// console.log(
//   isObjectEmpty({})
// ); // true

// console.log(
//   isObjectEmpty({
//     a: 1
//   })
// ); // false

// console.log(
//   isObjectEmpty({
//     a: 1,
//     b: 2
//   })
// ); // false

//=============================================================================


/*
  task-05

  Напишите функцию countTotalSalary(salaries),
  получающую объект и считающую общую сумму запрплаты работников.
  
  Каждое поле объекта передаваемого в функцию, имеет вид "имя":"зарплата"
  
  Функция возвращает общую сумму зарплаты.

*/

// const countTotalSalary = salaries => {

//   let total = 0;
//   const valuesSalaries = Object.values(salaries);

//   for (let value of valuesSalaries) {

//     total += value;
//   }

//   return total;

// }

// // Вызовы функции для проверки
// console.log(
//   countTotalSalary({})
// ); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80
//   })
// ); // 330

//=============================================================================


/*
  task-06

Напишите функцию getAllPropValues(arr, prop), 
  которая получает массив объектов и имя ключа, 
  возвращает массив значений определенного поля prop
  из каждого объекта в массиве

*/

const getAllPropValues = (arr, prop) => {

  // console.log(arr);

  for (let i of arr) {

    console.log(i[prop]);

  }


}

const users = [{
    name: 'Poly',
    age: 7,
    mood: 'happy'
  },
  {
    name: 'Mango',
    age: 4,
    mood: 'blissful'
  },
  {
    name: 'Ajax',
    age: 3,
    mood: 'tired'
  }
];

// Вызовы функции для проверки
console.log(
  getAllPropValues(users, 'name')
); // ['Poly', 'Mango', 'Ajax']

console.log(
  getAllPropValues(users, 'mood')
); // ['happy', 'blissful', 'tired']

console.log(
  getAllPropValues(users, 'active')
); // []

//=============================================================================