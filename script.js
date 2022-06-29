//let hello = alert('Привет!');

let  num = 0;
let score;

const question1 = {
    question: 'Какую сложность игры ты выберешь?',
    answer: 'легкая',
    correctAnswer: 'средняя'
};

const question2 = {
    question: 'Как у тебя дела?'
};

const question3 = {
    question: 'Сколько тебе лет?'
};
const question4 = {
    question: 'Какое у тебя хобби?'
};

let allQestions = [Array(question1), Array(question2), Array(question3), Array(question4)];

allQestions.forEach((question, i) => {if (i % 2 != 0){question.correctAnswer = 'c'}});

let result = allQestions.filter(question => Object.values(question).some(correctAnswer => correctAnswer == 'c'));

console.log(result)