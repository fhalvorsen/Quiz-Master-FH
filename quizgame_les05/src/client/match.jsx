import React from "react";
import {getRandomQuizzes} from "./quizzes";
import {Link} from "react-router-dom";


export default class Match extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            match: null
        };

        this.handleClick.bind(this);
    }

    componentDidMount() {
        this.startNewQuiz(this.props.location.state.inputNumber);
    }


    startNewQuiz = (numberOfQuiz) => {
        const quiz = getRandomQuizzes(numberOfQuiz);

        this.setState({
                match: {
                    quiz: quiz,
                    victory: false,
                    defeat: false,
                    currentIndex: 0,
                    numberOfQuestions: quiz.length
                }
            }
        )
    };

    handleClick = (result) => {

        if (result) {
            if (this.state.match.currentIndex === this.state.match.numberOfQuestions - 1) {
                this.setState({
                    match: {
                        victory: true
                    }
                })
            } else {
                this.setState(prev => ({
                    match: {
                        currentIndex: prev.match.currentIndex + 1,
                        quiz: prev.match.quiz,
                        numberOfQuestions: prev.match.numberOfQuestions
                    }
                }));
            }
        } else {
            this.setState({
                match: {
                    defeat: true
                }
            })
        }
    };


    renderChoice(prefix, answer, result) {
        return <div className='answerBtn' onClick={() => this.handleClick(result)}> {prefix + answer} </div>;
    }

    render() {

        if (!this.state.match) {
            return <h1>...Loading</h1>;
        }

        if (this.state.match.victory) {
            return (
                <div>
                    <h1>You won!</h1>
                    <div id='startBtn'>
                        <Link to={'/'}>Play Again</Link>
                    </div>
                </div>
            )
        }

        if (this.state.match.defeat) {
            return (
                <div>
                    <h1> You Lost!</h1>
                    <div id='startBtn'>
                        <Link to={'/'}>Play Again</Link>
                    </div>
                </div>
            )
        }
        const match = this.state.match;
        const questionIndex = "" + (match.currentIndex + 1) + "/" + match.numberOfQuestions;
        const quiz = match.quiz[match.currentIndex];

        return (
                <div id="quiz_container">
                    <div className='question_container'>
                        <h1 className='question_hl'>Question: {questionIndex}</h1>
                        <h2 id="question_title"> {quiz.question}</h2>
                    </div>
                    <div id="answer_container">
                        {this.renderChoice("A: ", quiz.choice[0], quiz.answer === 0)}
                        {this.renderChoice("B: ", quiz.choice[1], quiz.answer === 1)}
                        {this.renderChoice("C: ", quiz.choice[2], quiz.answer === 2)}
                        {this.renderChoice("D: ", quiz.choice[3], quiz.answer === 3)}
                    </div>
                </div>
        )
    }
}
