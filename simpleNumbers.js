function simpleNumbers() {
    // Функция для генерации случайной задачи
    function generateTask() {
        const operations = ['+', '-', '*', '/'];
        const num1 = Math.round(Math.random() * 9) + 1;
        const op = operations[Math.floor(Math.random() * operations.length)];
        const num2 = Math.round(Math.random() * 9) + 1;

        if (op == '*') {
            return `${num1} * ${num2}`;
        } else if (op == '/' && num2 !== 0) {
            return `${num1} / ${num2}`;
        } else {
            return `${num1} ${op} ${num2}`;
        }
    }

    // Основной цикл игры
    while (true) {
        // Генерация задачи
        const task = generateTask();
        alert(`Ваша задача: ${task}`);

        // Запрос ответа от пользователя
        const input = Number(prompt('Введите ваш ответ'));

        // Проверка правильности ответа
        const correctAnswer = eval(task);
        if (input === correctAnswer) {
            alert('Ответ верный!');
        } else {
            alert(`Ошибка! Правильный ответ: ${correctAnswer}`);
        }

        // Вопрос о продолжении игры
        const continuePlaying = confirm('Хотите сыграть еще раз?');
        if (!continuePlaying) {
            break;
        }
    }

    alert('Игра окончена. Спасибо за участие!');

}