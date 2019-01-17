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

const Account = function Account({ login, email, friendsCount }) {
  this.login = login;
  this.email = email;
  this.friendsCount = friendsCount;
};

Account.prototype.getAccountInfo = function() {
  console.log(this.login);
  console.log(this.email);
  console.log(this.friendsCount);
};

const mango = new Account({
  login: 'Mango',
  email: 'mango@gmail.com',
  friendsCount: 20,
});
mango.getAccountInfo();
console.log(mango);

const poly = new Account({
  login: 'Poly',
  email: 'poly@gmail.com',
  friendsCount: 90,
});
poly.getAccountInfo();
console.log(poly);

//=============================================================================
