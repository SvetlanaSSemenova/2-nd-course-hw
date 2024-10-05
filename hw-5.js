// Задание 1
function min(a, b) {
    return a < b ? a : b;
}

console.log(min(5, 10));


// Задание 2
function checkEvenness(n) {
    if (n % 2 == 0) {
        console.log('Число четное');
    } else {
        console.log('Число нечетное');
    }
}

checkEvenness(8);


// Задание 3
function param(num) {
    console.log(Math.pow(num, 2));
}

param(11);

function square(num) {
    return Math.pow(num, 2);
}

console.log(square(5));

// Задание 4
function checkAge() {
    let age = parseInt(prompt("Сколько вам лет?"));

    if (age < 0) {
        console.log('Вы ввели неправильное значение');
    } else if (age >= 0 && age <= 12) {
        console.log(`Привет, друг!`);
    } else {
        console.log(`Добро пожаловать!`);
    }
}

checkAge();

// Задание 5
function multiply(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return a * b;
    }
}

console.log(multiply(5, 3));
console.log(multiply('5', '3'));

// Задание 6
function cube(num) {
    let userInput = parseInt(prompt("Введите число от 0 до 10"));
  
    if (isNaN(userInput)) {
      console.log('Переданный параметр не является числом');
    } else if (userInput >= 0 && userInput <= 10) {
      let result = Math.pow(userInput, 3);
      console.log(`${userInput} в кубе равняется ${result}`);
    }
  }
  
  cube(5); 

// Задание 7

function Circle(radius) {
    this.radius = radius;
  }
  
  Circle.prototype.getArea = function() {
    return Math.PI * this.radius * this.radius;
  };
  
  Circle.prototype.getPerimeter = function() {
    return 2 * Math.PI * this.radius;
  };
  
  let circle1 = new Circle(235);
  let circle2 = new Circle(160);
  
  console.log(`Площадь первого круга: ${circle1.getArea()}`); // выведет в консоль «Площадь первого круга: »
  console.log(`Периметр первого круга: ${circle1.getPerimeter()}`); // выведет в консоль «Периметр первого круга: »
  console.log();
  console.log(`Площадь второго круга: ${circle2.getArea()}`); // выведет в консоль «Площадь второго круга: »
  console.log(`Периметр второго круга: ${circle2.getPerimeter()}`); // выведет в консоль «Периметр второго круга: »