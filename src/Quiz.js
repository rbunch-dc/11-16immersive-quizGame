import React, { Component } from 'react';
import Question from './Question.js';
import Daffy from './data.js'

class Quiz extends Component {
	constructor(props) {
		super(props);
		this.state = {
			questionIndex: 0,
			userScore: 0
		}
		this.userAnswered = this.userAnswered.bind(this);
	}



	userAnswered(correctOrNot){
		var newQuetionNumber = this.state.questionIndex + 1;
		// console.log(newQuetionNumber);
		if(correctOrNot == 1){
			var newScore = this.state.userScore + 1
			var scoreAsPercent = (newScore / newQuetionNumber) * 100;
			// User was correct. Update score.
			this.setState({
				userScore: scoreAsPercent,
				questionIndex: newQuetionNumber
			});
		}else{
			// The missed it. Do something
			this.setState({
				questionIndex: newQuetionNumber
			});			
		}
	}

	render() {
		var quizArray = [];
		// console.log(this.state.questionIndex);
	 	quizArray.push(
	  		<Question letMeKnowWhenFinished={this.userAnswered} question={Daffy.questions[this.state.questionIndex]} key={this.state.questionIndex} />
		)
		console.log(quizArray)
		return (
	    	<div className="App">
	     		<h1>You've got {this.state.userScore} % correct!</h1>
	      		{quizArray}
	    	</div>
	  	);
	}
}

export default Quiz;
