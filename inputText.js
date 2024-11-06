

function inputText() {

    // Запрашиваем ввод текста у пользователя
    const inputText = prompt("Пожалуйста, введите текст:");


    // Проверяем, введен ли текст
    if (inputText !== null && inputText.trim() !== "") {
        // Переворачиваем текст
        const reversedText = inputText.split('').reverse().join('');

        // Выводим результат
        alert(`Перевёрнутый текст: ${reversedText}`);
    } else {
        alert("Вы ничего не ввели.");
    }
}