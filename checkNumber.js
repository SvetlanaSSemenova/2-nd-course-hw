// Генерируем случайное число
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Создаём функцию для запуска игры
function startGame() {
    // Создаём цикл для игры
    let guess = null;
    do {
        // Просим пользователя ввести число
        guess = prompt("Попробуйте угадать число!");

        // Проверяем, угадал ли пользователь число
        if (guess == randomNumber) {
            alert(`Вы угадали! Число было ${randomNumber}`);
            break;
        } else if (guess < randomNumber) {
            alert("Загаданное число больше.");
        } else {
            alert("Загаданное число меньше.");
        }
    } while (true);
}
