import {getRandomQuizzes} from './quizzes';

let quizNum = 0;


function quizChoice(prefix, answer, result) {

    let onclick;

    result ? onclick = `alert('correct'); ep.displayQuiz()` : onclick = `alert('wrong answer');`;

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



export function displayQuiz() {
    quizNum++;

    const randomNumber = Math.floor(  Math.random() * 5);

    const quiz = getRandomQuizzes(1)[0];

    buildQuiz(quiz)
}
