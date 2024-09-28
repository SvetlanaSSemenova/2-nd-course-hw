// Задание 1
let password = 'Пароль';
const userPassword = prompt('Введите пароль');

if (userPassword === password) {
    console.log('Пароль введен верно');
} else {
    console.log("Пароль введен неправильно");
}

// Задание 2
let c = 7;

if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log("Неверно");
}

// Задание 3
let d = 30;
let e = 150;

if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log("Неверно");
}

// Задание 4
let a = '2';
let b = '3';

alert(Number(a) + Number(b));

// Задание 5
let monthNumber = 12; 

switch (monthNumber) {
    case 1:
        console.log('Зима');
        break;
    case 2:
        console.log('Зима');
        break;
    case 3:
        console.log('Весна');
        break;
    case 4:
        console.log('Весна');
        break;
    case 5:
        console.log('Весна');
        break;
    case 6:
        console.log('Лето');
        break;
    case 7:
        console.log('Лето');
        break;
    case 8:
        console.log('Лето');
        break;
    case 9:
        console.log('Осень');
        break;
    case 10:
        console.log('Осень');
        break;
    case 11:
        console.log('Осень');
        break;
    case 12:
        console.log('Зима');
        break;
    default:
        if (monthNumber > 13) {
            console.error('Неверный номер месяца!');
        }
}

