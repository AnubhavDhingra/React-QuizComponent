import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion';
import QuizEnd from './QuizEnd';

let quizData = require('./quiz_data.json');

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {quiz_position: 1};
    }
    
    render() {
        let isQuizEnd = '';
        if (quizData.quiz_questions.length === this.state.quiz_position) {
            isQuizEnd = true;
        }
        return (
            (isQuizEnd) ? 
            <div>
                <QuizEnd />
            </div> 
            : 
            <div>
                <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]}/>
            </div>
        );
    }
}

export default Quiz;