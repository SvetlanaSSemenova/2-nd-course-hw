function quiz() {

    const quiz = [
        {
            question: "Какой цвет небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];

    let correctAnswersCount = 0;

    for (let i = 0; i < quiz.length; i++) {
        const currentQuestion = quiz[i];
        const userAnswer = parseInt(prompt(currentQuestion.question + "\n" + currentQuestion.options.join("\n")));

        if (userAnswer === currentQuestion.correctAnswer) {
            correctAnswersCount++;
        }
    }

    alert(`Правильных ответов: ${correctAnswersCount}/${quiz.length}`);
}

