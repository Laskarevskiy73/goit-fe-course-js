'use strict';

/*
  task-01

  Создать функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email и friendsCount.

  В prototype функции-конструктора добавить метод getAccountInfo(),
  который выводит в консоль значения полей login, email и friendsCount.

  Обратите внимание, метод будет всего один, в поле prototype функции-конструктора,
  а использовать его смогут все экземпляры, по ссылке.

  Создать несколько экземпляров с разными значениями свойств, вывести их в консоль.
*/

// const Account = function Account({ login, email, friendsCount }) {
//   this.login = login;
//   this.email = email;
//   this.friends = friendsCount;
// };

// Account.prototype.getAccountInfo = function() {
//   console.log(this.login);
//   console.log(this.email);
//   console.log(this.friendsCount);
// };

// const mango = new Account({
//   login: 'Mango',
//   email: 'mango@gmail.com',
//   friendsCount: 20,
// });
// console.log(mango);

// const poly = new Account({
//   login: 'Poly',
//   email: 'poly@gmail.com',
//   friendsCount: 340,
// });
// console.log(poly);

// const ajax = new Account({
//   login: 'Ajax',
//   email: 'ajax@gmail.com',
//   friendsCount: 4,
// });
// console.log(ajax);

//=============================================================================

/*
  task-02

  Напишите ES6 класс StringBuilder.

  На вход (в конструкторе) он получает один параметр string - строку,
  которую записывает в поле value.

  Добавьте классу следующие методы:

    - getValue() - выводит в консоль текущее значение поля value

    - append(str) - получает парметр str - строку и добавляет
      ее в конец значения поля value

    - prepend(str) - получает парметр str - строку и добавляет
      ее в начало значения поля value

    - pad(str) - получает парметр str - строку и добавляет
      ее в начало и в конец значения поля value
*/
// class StringBuilder {
//   constructor(string) {
//     this.value = string;
//   }
//   getValue() {
//   console.log(this.value);
//   }
//   append(str) {
//     this.value = this.value + str;
//   }
//   prepend(str) {
//     this.value = str + this.value;
//   }
//   pad(str) {
//     this.value = str + this.value + str;
//   }
//   showValue() {
//     return this.getValue();
//   }
// }

// const stringBuilder = new StringBuilder('.');

// stringBuilder.getValue();

// stringBuilder.append('^');
// stringBuilder.showValue(); // '.^'

// stringBuilder.prepend('^');
// stringBuilder.showValue(); // '^.^'

// stringBuilder.pad('=');
// stringBuilder.showValue(); // '=^.^='

//=============================================================================

/*
  task-03
  
  Создайте класс Car с указанными полями и методами.
*/
// class Car {
//   constructor(maxSpeed, speed = 0, running = false, distance = 0) {
//     this.maxSpeed = maxSpeed;
//     this.speed = speed;
//     this.running = running;
//     this.distance = distance;
//     /*
//       Добавьте свойства:
//         - speed - для отслеживания текущей скорости, изначально 0.
//         - maxSpeed - для хранения максимальной скорости
//         - running - для отслеживания заведен ли автомобиль, возможные значения true или false. Изначальнj false.
//         - distance - содержит общий киллометраж, изначально с 0
//     */
//   }

//   turnOn() {
//     return (this.running = true);
//     // Добавьте код для того чтобы завести автомобиль
//     // Просто записывает в свойство running значание true
//   }

//   turnOff() {
//     return (this.running = false);
//     // Добавьте код для того чтобы заглушить автомобиль
//     // Просто записывает в свойство running значание false
//   }

//   accelerate(spd) {
//     if (this.maxSpeed >= spd) {
//       this.speed = spd;
//     }
//     // Записывает в поле speed полученное значение, при условии что
//     // оно не больше чем значение свойства maxSpeed
//   }

//   decelerate(spd) {
//     const allowableSpeed = this.maxSpeed > spd && spd > 0;
//     if (allowableSpeed) {
//       this.speed = allowableSpeed;
//     }
//     // Записывает в поле speed полученное значение, при условии что
//     // оно не больше чем значение свойства maxSpeed и не меньше нуля
//   }

//   drive(hours) {
//     if (this.running) {
//       this.distance = hours * this.speed;
//     }
//     // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
//     // но только в том случае если машина заведена!
//   }

//   static getSpecs(obj) {
//     console.log(obj);
//   }
// }

// const mango = new Car(20);
// // Изначальное значение обьекта
// console.log(mango);

// // Проверка методов

// // Обьект mango Заводит автомобиль!
// mango.turnOn();
// // Обьект mango Глушит автомобиль!
// // mango.turnOff();
// // Текущая скорость автомобиля
// mango.accelerate(19);
// // Допустимая скорость автомобиля
// mango.decelerate();
// // Метод считает километраж автомобиля за пройденное время
// mango.drive(5.5);

// console.log(mango);

//=============================================================================

/*
  task-04

  Добавьте к классу Car из предыдущего задания статический
  метод getSpecs, который получает объект-машину как аргумент
  и выводит в консоль значения полей maxSpeed, running и distance.

*/
// Использование будет выглядеть следующим образом:

// const someCar = new Car(100);
// someCar.turnOn();
// someCar.accelerate(100);
// someCar.drive(2);

// Car.getSpecs(someCar); // maxSpeed: 100, running: true, distance: 200
//=============================================================================

/*
  task-05

  Добавьте классу Car свойство value - цена автомобиля.

  Добавьте классу Car использование геттеров и сеттеров для свойства value.

  Геттер вернет текущей значение поля this._value
  Сеттер запишет в поле this._value то что ему присвоят

  PS: имя геттера и сеттера не может совпадать с полем, поэтому используйте
    не this.value а this._value
*/
class Car {
  constructor(maxSpeed, value) {
    this.maxSpeed = maxSpeed;
    this._value = value;
  }
  get value() {
    console.log(this._value);
  }

  set value(elem) {
    console.log((this._value = elem));
  }
}

// Использование выглядит следующим образом:

const myCar = new Car(50, 2000);

myCar.value; // 2000
myCar.value = 4000;
myCar.value; // 4000
//=============================================================================
