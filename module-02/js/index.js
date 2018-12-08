/*

1. Домашнее задание
Напишите со следующим функционалом:

При загрузке страницы пользователю предлагается ввести через prompt число. Это число добавляется в массив чисел numbers.
Операция ввода числа пользователем и сохранение в массив продолжается до тех пор, пока пользователь не нажмет Cancel в prompt. Используйте цикл do...while.
После того как пользователь прекратил ввод нажав Cancel, необходимо взять массив введенных чисел, сложить общую сумму всех элементов массива и записать ее в переменную total. Используйте цикл for или for...of.
По окончанию ввода, если массив не пустой, вывести alert с текстом Общая сумма чисел равна <сумма>
🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не обязательно. Если хотите, в случае некорректного ввода, покажите alert с текстом 'Было введено не число, попробуйте еще раз', при этом результат prompt записывать в массив чисел не нужно, после чего снова пользователю предлагается ввести число в prompt.

*/
{
    let userInput;
    const numbers = [];
    let total = 0;

    do {
        userInput = prompt('Введите число!');
        const hasNumber = Number(userInput);

        if (!userInput) {
            alert('Отменено пользователем!');
        } else if (!hasNumber) {
            alert('Введено не число! Попробуйте еще!');
        } else {
            numbers.push(hasNumber);
        }

    } while (userInput);

    for (const number of numbers) {

        total = number + total;
    }

    alert(`Общая сумма чисел равна ${total}`);
}
/*

2. Дополнительное задание
⚠️ ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ

Напишите скрипт имитирующий авторизацию пользователя.

Есть массив паролей зарегистрированных пользователей passwords.
При посещении страницы, необходимо попросить пользователя ввести свой пароль, после чего проверить содержит ли массив passwords пароль введенный пользователем.
Пароль можно ввести не верно всего n раз, кол-во хранится в переменной attempts. Подсказка: используйте цикл do...while.
Если был введен пароль который есть в массиве passwords, вывести alert с текстом 'Добро пожаловать!' и прекратить спрашивать пароль в цикле.
Если был введен не существующий пароль, отнять от лимита попыток единицу, вывести alert с текстом 'Неверный пароль, у вас осталось n попыток', где n это оставшийся лимит.
После того как пользователь закрыл alert, запросить пароль снова.
Продолжать запрашивать пароль до тех пор, пока пользователь не введет существующий пароль, не кончатся попытки или пока пользователь не нажмет Cancel в prompt.
Если закончились попытки, вывести alert с текстом 'У вас закончились попытки, аккаунт заблокирован!'
Если пользователь нажмет Cancel, прекратить выполнение цикла.

*/
{
    let userInput;
    const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
    let attempts = 3;

    do {

        userInput = prompt('Введите пароль!');

        if (!userInput) {

            alert('Отменено пользователем!');

        } else if (!passwords.includes(userInput)) {
            attempts -= 1;

            alert(`Неверный пароль, у вас осталось ${attempts} попыток`);

            if (attempts === 0) {
                alert('У вас закончились попытки, аккаунт заблокирован!');

                break;
            }

        } else {
            alert('Добро пожаловать!');

            break;
        }
    } while (userInput);
}