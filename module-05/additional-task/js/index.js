// 'use strict';

/*
    task-01

  Напишите код, который бы  с помощью
  функции-конструкора User, позволял создавать
  объекты пользователя со следующим свойствами:
    - name - строка (имя)
    - isActive - буль (активен)
    - age - число (возраст)
    - friends - число (кол-во друзей)

  Имя, активность, возраст и друзей, необходимо передать
  как аргументы при вызове конструктора.

  Добавить метод getUserInfo(), которая, выводит строку:
  `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`

  Создать несколько объектов пользователя User и с помощью
  функции getUserInfo вывести строку в консоль.
*/

// const User = function({ name, isActive, age, friends }) {
//   this.name = name;
//   this.isActive = isActive;
//   this.age = age;
//   this.friends = friends;
//   this.getUserInfo = function() {
//     return `User ${this.name} is ${this.age} years old and has ${
//       this.friends
//     } friends`;
//   };
// };

// const mango = new User({
//   name: 'Mango',
//   isActive: true,
//   age: 18,
//   friends: 89,
// });
// console.log(mango);

// const poly = new User({
//   name: 'Poly',
//   isActive: false,
//   age: 20,
//   friends: 9,
// });
// console.log(poly);

// const ajax = new User({
//   name: 'Ajax',
//   isActive: true,
//   age: 35,
//   friends: 44,
// });
// console.log(ajax);

// console.log(mango.getUserInfo());
// console.log(poly.getUserInfo());
// console.log(ajax.getUserInfo());

//=============================================================================

/*
    task-02

    Расставьте отсутствующие this в методах объекта store
*/

// const store = {
//   products: ['bread', 'cheese', 'milk', 'apples'],
//   managers: ['poly', 'mango', 'ajax'],
//   addManager(manager) {
//     this.managers.push(manager);

//     console.log(this.managers);
//   },
//   removeManager(manager) {
//     const idx = this.managers.indexOf(manager);

//     this.managers.splice(idx, 1);

//     console.log(this.managers);
//   },
//   getProducts() {
//     console.log(this.products);

//     return this.products;
//   },
// };

// store.addManager('chelsey'); // ['poly', 'mango', 'ajax', 'chelsey']

// store.removeManager('mango'); // ['poly', ajax', 'chelsey']

// store.getProducts(); // ['bread', 'cheese', 'milk', 'apples']

//=============================================================================

/*
    task-03

    Расставьте отсутствующие this в конструкторе объектов Account
*/

// function Account(login, password, type = 'regular') {
//   this.login = login;
//   this.password = password;
//   this.type = type;

//   this.changePassword = function(newPassword) {
//     this.password = newPassword;

//     return this.password;
//   };

//   this.getAccountInfo = function() {
//     return `
//       Login: ${this.login},
//       Pass: ${this.password},
//       Type: ${this.type}
//     `;
//   };
// }

// const account = new Account('Mango', 'qwe123', 'premium');

// console.log(account.login); // 'Mango'
// console.log(account.password); // 'qwe123'
// console.log(account.type); // 'premium'

// console.log(account.changePassword('asdzxc')); // 'asdzxc'

// console.log(account.getAccountInfo()); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'

//=============================================================================
