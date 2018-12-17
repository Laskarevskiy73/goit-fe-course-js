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

const tasksCompleted = {
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99
};


//=============================================================================