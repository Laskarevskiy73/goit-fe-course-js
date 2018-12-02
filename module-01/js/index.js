/*

    1. Домашнее задание

Напишите скрипт имитирующий авторизацию администратора в панели управления.

При загрузке страницы у посетителя запрашивается логин через prompt:

Если посетитель нажал Cancel — показывать alert с текстом Отменено пользователем!
Если было введено что либо другое, что не совпадает со значением константы adminLogin, показывать alert с текстом Доступ запрещен, неверный логин!
Если был введен логин совпадающий со значением константы adminLogin, спрашивать пароль через prompt.
При вводе пароля:

Если нажали Cancel, показывать alert с текстом Отменено пользователем!
Если введен пароль который не совпадает со значением константы adminPassword, показывать alert с текстом Доступ запрещен, неверный пароль!
Если введён пароль который совпадает со значением константы adminPassword, показывать alert с текстом Добро пожаловать!
🔔 Для удобства и чистоты кода сохраните в переменные сообщения отображаемые в alert
*/

const adminLogin = 'admin';
const adminPassword = 'm4ng0h4ckz';
const userInputLogin = prompt('Введите Ваш логин!');
const canceled = 'Отменено пользователем!';
const loginError = 'Доступ запрещен, неверный логин!';
const passwordError = 'Доступ запрещен, неверный пароль!';
const welcome = 'Добро пожаловать!';

if (!userInputLogin) {
    alert(canceled);
} else if (userInputLogin !== adminLogin) {
    alert(loginError);
} else {

    const userInputPass = prompt('Введите Ваш пароль!');

    if (!userInputPass) {
        alert(canceled);
    } else if (userInputPass !== adminPassword) {
        alert(passwordError);
    } else {
        alert(welcome);
    }
}


//=============================================================================


/*

2. Дополнительное задание
⚠️ ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ

Создайте скрипт турагенства, продающего поездки в 3-х группах: sharm, hurgada и taba.

Кол-во мест в группах ограничено: sharm - 15, hurgada - 25, taba - 6

🔔 Создайте переменные для хранения мест в группах.

Когда пользователь посещает страницу, предложить ему ввести число необходимых мест, результат сохранить в переменную.

Проверить являются ли введенные данные целым положительным числом.

В случае неверного ввода от пользователя, скрипт показывает alert с текстом Ошибка ввода! и больше ничего не делает.
Если пользователь нажал Cancel, скрипт показывает alert с текстом Нам очень жаль, приходите еще!.
В случае верного ввода, последовательно проверить кол-во мест в группах, и кол-во необходимых мест введенных пользователем.
Если была найдена группа, в которой количество мест больше либо равно необходимому, вывести сообщение через confirm, что есть место в группе такой-то, согласен ли пользоваетель быть в этой группе?

Если ответ да, показать alert с текстом Приятного путешествия в группе <имя группы>
Если ответ нет, показать alert с текстом Нам очень жаль, приходите еще!
Если мест нигде нет, показать alert с сообщением Извините, столько мест нет ни в одной группе!

*/

const ofPlaceInSharm = 15;
const hotelSharm = 'Sharm';
const ofPlaceInHurgada = 25;
const hotelHurgada = 'Hurgada';
const ofPlaceInTaba = 6;
const hotelTaba = 'Taba';
const userInput = prompt('Введите число необходимых Вам мест!');
const positivNumber = Number(userInput);
const sorryComeAgain = 'Нам очень жаль, приходите еще!';
const inGroup = 'Согласны Вы быть в группе';
const niceTrip = 'Приятного путешествия в группе';
const resultSharm = positivNumber <= ofPlaceInSharm;
const resultHurgada = positivNumber <= ofPlaceInHurgada;
const resultTaba = positivNumber <= ofPlaceInTaba;
let resultUser;

if (!userInput) {
    alert(sorryComeAgain);
} else if (positivNumber <= 0) {
    alert('Ошибка ввода!');
} else {

    if (resultTaba) {
        resultUser = confirm(`${inGroup} ${hotelTaba}`);
        resultUser ? alert(`${niceTrip} ${hotelTaba}`) : alert(sorryComeAgain);

    } else if (resultSharm) {
        resultUser = confirm(`${inGroup} ${hotelSharm}`);
        resultUser ? alert(`${niceTrip} ${hotelSharm}`) : alert(sorryComeAgain);

    } else if (resultHurgada) {
        resultUser = confirm(`${inGroup} ${hotelHurgada}`);
        resultUser ? alert(`${niceTrip} ${hotelHurgada}`) : alert(sorryComeAgain);

    } else {
        alert('Извините, столько мест нет ни в одной группе!');
    }
}