const quizArray = [{
    question: 'How long is the first Harry Potter movie: Harry Potter and The Philosopher\'s Stone?',
    choice: ['1.5', '2.5', '3.5', '4.5'],
    answer: 1
}, {
    question: 'Which 1984 film featured a main character named Axel Foley?',
    choice: ['Indiana Jones', 'Star Wars', 'Beverly Hills Cop', 'The Terminator'],
    answer: 2
}, {
    question: 'Who was offered and turned down the part of Han Solo in the original Star Wars film?',
    choice: ['Sylvester Stallone', 'Al Pacino', 'Brad Pitt', 'Jack Black'],
    answer: 1
}, {
    question: 'Which American actor is associated with the line "Go ahead, make my day", which he delivered in 1983 film?',
    choice: ['Chuck Norris', 'Bruce Willis', 'Tom Cruise', 'Clint Eastwood'],
    answer: 3
}];

let currentQuizIndex = 0;
let quizNum = 0;


function quizChoice(prefix, answer, result) {

    let onclick;

     result ? onclick = `alert('correct'); displayQuiz();` : onclick = `alert('wrong answer');`;

    return "<div class='answerBtn' onclick=\""+onclick+"\">" + prefix + answer + "</div>";
}


function buildQuiz(quiz) {


    let html = `<div class='question_container'>
                <h1 class='question_hl'>Question ${quizNum}:</h1>
                   <h2 id="question_title">${quiz.question}</h2>
                </div>
                <div id="answer_container">`;

    html += quizChoice("A: ", quiz.choice[0], quiz.answer === 0);
    html += quizChoice("B: ", quiz.choice[1], quiz.answer === 1);
    html += quizChoice("C: ", quiz.choice[2], quiz.answer === 2);
    html += quizChoice("D: ", quiz.choice[3], quiz.answer === 3);
    html += `</div>`;


    const quizDisplay = document.getElementById('quiz_container');

    quizDisplay.innerHTML = html;
}



function displayQuiz() {
    quizNum++;
    let index = Math.floor(Math.random() * quizArray.length);

    if (currentQuizIndex === 0) {
        index = (index + 1) % quizArray.length;
    }

    const quiz = quizArray[index];
    currentQuizIndex = index;

    buildQuiz(quiz)
}