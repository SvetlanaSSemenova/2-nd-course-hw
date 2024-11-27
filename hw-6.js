// Задание 1
const array = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < array.length; i++) {
    if (array[i] === 10) {
        console.log(array[i]);
        break;
    }
    console.log(array[i]);
}

// Задание 2
const arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 4) {
        console.log(`Индекс значения 4 в массиве: ${i}`);
        break;
    }
}

// Задание 3

const numb = [1, 3, 5, 10, 20];

const joinedNumb = numb.join(' ');

console.log(joinedNumb);

// Задание 4

const matrix = [];
for (let i = 0; i < 3; i++) {
    matrix[i] = [];
    for (let j = 0; j < 3; j++) {
        matrix[i][j] = 1;
    }
}
console.log(matrix);

// Задание 5

let number = [1, 1, 1];
number.push(2, 2, 2);
console.log(number);

// Задание 6

const letter = [9, 8, 7, 'a', 6, 5];
letter.sort((a, b) => a - b); // Сортировка массива
const result = letter.filter(item => item !== 'a'); // Удаление буквы 'a' из массива
console.log(result);

// Задание 7

const tale = [9, 8, 7, 6, 5];
let userInput = prompt("Угадайте число");
if (tale.includes(Number(userInput))) {
    alert("Угадал!");
} else {
    alert("Не угадал.");
}

// Задание 8

const originalString = 'abcdef';
const reversedString = originalString.split('').reverse().join('');

console.log(reversedString);

// Задание 9

const twoInOne = [[1, 2, 3], [4, 5, 6]];
const combinedTwoInOne = [...twoInOne[0], ...twoInOne[1]];

console.log(combinedTwoInOne);

// Задание 10

const numbersOn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numbersOn.length - 1; i++) {
    console.log(numbersOn[i] + numbersOn[i + 1]);
}

// Задание 11

function squareArray(arrNumb) {
    return arrNumb.map(num => num * num);
}

const numbers = [1, 2, 3, 4, 5];
const squares = squareArray(numbers);
console.log(squares);

// Задание 12

function getWordLengths(words) {
    return words.map(word => word.length);
}

const sentences = ["Hello", "world", "Welcome"];
const lengths = getWordLengths(sentences);
console.log(lengths); 

// Задание 13

function onlyNegativeValues(arr) {
    return arr.filter(num => num < 0);
}

const numbersMinus = [-1, 2, -3, 4, -5];
const negativeOnly = onlyNegativeValues(numbersMinus);
console.log(negativeOnly);

// Задание 14

let randomArray = [];  // Генерация исходного массива
for (let i = 0; i < 10; i++) {
    randomArray.push(Math.floor(Math.random() * 11)); // Диапазон от 0 до 10 включительно
}

// Нахождение всех четных чисел в массиве
let evenNumbers = randomArray.filter(number => number % 2 === 0);

// Вывод результатов
console.log("Исходный массив:", randomArray);
console.log("Массив четных чисел:", evenNumbers);

// Задание 15

const numbersElement = []; // Создание массива из 6 случайных чисел от 1 до 10
for (let i = 0; i < 6; i++) {
    numbersElement.push(Math.floor(Math.random() * 9) + 1);
}

// Вычисление среднего арифметического
const sum = numbersElement.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const average = sum / numbersElement.length;

// Вывод результата в консоль
console.log(`Среднее арифметическое: ${average}`);
