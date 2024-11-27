// Задание 1

let str = 'js';

// Преобразование строки в верхний регистр
let upperStr = str.toUpperCase();

// Вывод результата
console.log(upperStr);


// Задание 2

function filterArrayByPrefix(arr, prefix) {
    return arr.filter(item => item.toLowerCase().startsWith(prefix.toLowerCase()));
}

const array = ['Apple', 'Banana', 'Orange', 'apple', 'banana'];
const prefix = 'ba';

const result = filterArrayByPrefix(array, prefix);
console.log(result);


// Задание 3

function roundNumber(number) {
    console.log("Исходное число:", number);

    // Округление до меньшего целого
    const floorResult = Math.floor(number);
    console.log("Округление до меньшего целого:", floorResult);

    // Округление до большего целого
    const ceilResult = Math.ceil(number);
    console.log("Округление до большего целого:", ceilResult);

    // Округление до ближайшего целого
    const roundResult = Math.round(number);
    console.log("Округление до ближайшего целого:", roundResult);
}

roundNumber(32.58884);


// Задание 4

function findMinAndMax(numbers) {
    // Находим минимальное значение
    const minValue = Math.min(...numbers);
    console.log("Минимальное значение:", minValue);

    // Находим максимальное значение
    const maxValue = Math.max(...numbers);
    console.log("Максимальное значение:", maxValue);
}

const numbers = [52, 53, 49, 77, 21, 32];

findMinAndMax(numbers);


// Задание 5

function getRandomNumber(min, max) {
    // Генерируем случайное число между min и max включительно
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomNumber);
}

getRandomNumber(1, 10);


// Задание 6

function generateRandomArray(n) {
    if (typeof n !== 'number' || !Number.isInteger(n) || n <= 0) {
        throw new Error('Переданное значение должно быть положительным целым числом.');
    }

    const halfLength = Math.floor(n / 2);
    const result = [];

    for (let i = 0; i < halfLength; i++) {
        result.push(Math.floor(Math.random() * n));
    }

    return result;
}

try {
    const array = generateRandomArray(10);
    console.log(array);
} catch (error) {
    console.error(error.message);
}


// Задание 7

function getRandomNumberBetween(min, max) {
    // Проверка, что min и max являются числами
    if (typeof min !== 'number' || typeof max !== 'number') {
        throw new Error('Оба аргумента должны быть числами.');
    }

    // Проверка, что min меньше или равен max
    if (min > max) {
        throw new Error('Первый аргумент должен быть меньше или равен второму.');
    }

    // Генерация случайного числа в диапазоне [min, max]
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Пример использования
const randomNumber = getRandomNumberBetween(5, 15);
console.log(randomNumber);


// Задание 8

const now = new Date();
console.log(now);


// Задание 9

const currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);


// Задание 10

const monthsRu = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
const weekDaysRu = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

function formatDate(date) {
    // День месяца
    const day = date.getDate();

    // Месяц на русском языке
    const monthIndex = date.getMonth();
    const monthName = monthsRu[monthIndex];

    // Год
    const year = date.getFullYear();

    // День недели на русском языке
    const weekDayIndex = date.getDay();
    const weekDayName = weekDaysRu[weekDayIndex];

    // Время
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    // Формируем итоговую строку
    return `
Дата: ${day} ${monthName} ${year} — это ${weekDayName}.
Время: ${hours}:${minutes}:${seconds}
`;
}

const today = new Date();
console.log(formatDate(today));  