// Задание 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

people.sort((a, b) => a.age - b.age);

console.log(people);

// Задание 2

function isPositive(element) { // Функция для проверки положительного числа
    return element > 0;
}

function isMale(person) { // Функция для проверки пола
    return person.gender === 'male';
}

function filter(array, ruleFunction) {
    return array.map((element, index) => { // Используем map для преобразования каждого элемента

        if (ruleFunction(element)) {  // Проверяем условие с помощью ruleFunction
            return element;  // Если условие выполнено, добавляем элемент в новый массив
        } else {
            return undefined;  // Иначе возвращаем undefined, чтобы исключить элемент
        };
    })

        .filter(item => item !== undefined); // Фильтруем массив, удаляя все undefined значения
}

// Тестирование функции filter
console.log(filter([3, -4, 1, 9], isPositive));

const peopleMale = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(peopleMale, isMale));


// Задание 3

let intervalId = setInterval(() => { // установка интервала для вывода текущей даты каждые 3 секунды
    console.log(new Date());
}, 3000);


setTimeout(() => {  // Установка таймера на 30 секунд, чтобы остановить интервал
    clearInterval(intervalId);
    console.log('30 секунд прошло');
}, 30000);

// Задание 4
function delayForSecond(callback) {
    setTimeout(callback, 1000); // Задержка на 1 секунду
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
});


// Задание 5
// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) {
            cb();
        }
    }, 1000);
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

// Исправление кода:
delayForSecond(() => sayHi('Глеб'));