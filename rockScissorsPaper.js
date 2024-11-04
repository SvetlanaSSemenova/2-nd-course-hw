function rockScissorsPaper() {
    const choices = ["камень", "ножницы", "бумага"];

    // Получаем выбор пользователя через prompt
    let userChoice = prompt("Ваш выбор: камень, ножницы или бумага?");
    if (!choices.includes(userChoice)) {
        alert("Пожалуйста, введите правильный вариант: 'камень', 'ножницы' или 'бумага'.");
        return;
    }

    // Генерируем случайный выбор компьютера
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Определяем победителя
    let result;
    if (userChoice === computerChoice) {
        result = "Ничья!";
    } else if (
        (userChoice === "камень" && computerChoice === "ножницы") ||
        (userChoice === "ножницы" && computerChoice === "бумага") ||
        (userChoice === "бумага" && computerChoice === "камень")
    ) {
        result = "Вы победили!";
    } else {
        result = "Компьютер победил.";
    }

    alert(`Ваш выбор: ${userChoice}\nВыбор компьютера: ${computerChoice}\nРезультат: ${result}`);
}