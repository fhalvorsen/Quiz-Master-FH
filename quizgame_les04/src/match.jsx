import React from "react";
import {getRandomQuizzes} from "./quizzes";

export default class Match extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            quiz: getRandomQuizzes(1)[0],
            quizNum: 0,
            gameInProgress: false
        };

        this.startGame.bind(this);
        this.handleClick.bind(this);
    }

    startGame = () => {
        this.setState({gameInProgress: true});
    };

    handleClick = (result) => {
        if (result) {
            alert("correct");
            this.setState({quiz: getRandomQuizzes(1)[0]});
            this.setState({
                quizNum: this.state.quizNum + 1
            });
        } else {
            alert("wrong");
        }
    };

    renderStartGame() {
        return <div>
            <h1>Vanilla js quiz</h1>
            <div id='startBtn' onClick={() => this.startGame()}>Start</div>
        </div>
    }

    renderGame() {

        const quizNr = this.state.quizNum;
        const quiz = this.state.quiz;

        return <div>
            <div id="quiz_container">
                <div className='question_container'>
                    <h1 className='question_hl'>Question: {quizNr}</h1>
                    <h2 id="question_title"> {quiz.question}</h2>
                </div>
                <div id="answer_container">
                    {this.renderChoice("A: ", quiz.choice[0], quiz.answer === 0)}
                    {this.renderChoice("B: ", quiz.choice[1], quiz.answer === 1)}
                    {this.renderChoice("C: ", quiz.choice[2], quiz.answer === 2)}
                    {this.renderChoice("D: ", quiz.choice[3], quiz.answer === 3)}
                </div>
            </div>
        </div>
    }

    renderChoice(prefix, answer, result) {
        return <div className='answerBtn' onClick={() => this.handleClick(result)}> {prefix + answer} </div>;
    }

    render() {
        const gameInProgress = this.state.gameInProgress;
        return (
        !gameInProgress ? this.renderStartGame() : this.renderGame()
        );
    }
}
