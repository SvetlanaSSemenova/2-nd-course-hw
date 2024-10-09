// Задание 1
console.log("Привет");
console.log("Привет");

// Задание 2
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Задание 3
for (let i = 7; i <= 22; i++) {
    console.log(i);
}

// Задание 4
const obj = {
    "Коля": 200,
    "Вася": 300,
    "Петя": 400
};

for (let key in obj) {
    console.log(`${key} — ${obj[key]} долларов`);
}

// Задание 5
let n = 1000;
let num = 0;

while (n >= 50) {
    n /= 2;
    num++;
}

console.log(n);
console.log(`Количество итераций: ${num}`);

// Задание 6
const firstFriday = Math.floor(new Date().getDate() / 7);

for (let i = firstFriday; i <= 5; i++) {
    const date = new Date(2023, 0, i * 7 + 5);
    console.log(`Сегодня пятница, ${date.getDate()} число. Необходимо подготовить отчёт.`);
}