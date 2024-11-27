function generateRandomColor() {
    // Генерируем случайный цвет в формате HEX
    let randomColor = "#";
    for (let i = 0; i < 6; i++) {
        randomColor += Math.floor(Math.random() * 16).toString(16); // Преобразуем число в шестнадцатиричный формат
    }

    // Применяем случайный цвет к фону страницы
    const element = document.getElementById('randomColor');
    element.style.backgroundColor = randomColor;
}