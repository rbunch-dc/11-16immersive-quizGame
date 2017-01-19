import React, { Component } from 'react';

class Question extends Component {
	constructor(props) {
		super(props);
		this.state = {
			answerChecked: 1,
			correctAnswer: this.props.question.ans
		}
		this.radioChanged = this.radioChanged.bind(this);
		this.checkAnswer = this.checkAnswer.bind(this);
	}

	radioChanged(event){
		// console.log(event.target.value);
		this.setState({
			answerChecked: event.target.value
		})
	}

	checkAnswer(event){
		event.preventDefault();
		if(this.state.answerChecked == this.state.correctAnswer){
			console.log("Correct Answer!!");
			this.props.letMeKnowWhenFinished(1); //1 = correct
		}else{
			console.log("Morog!!");
			this.props.letMeKnowWhenFinished(0); //0 = correct
		}

	}

	render() {
	  	var optionsArray = [];
	  	var self = this;
	  	this.props.question.options.map(function(option, index){
	  		optionsArray.push(
	  			<div key={index}>
	  				<input type="radio" onChange={self.radioChanged} name="questionAnswer" value={option.text} />
	  				{option.text}
	  			</div>
	  		)
  		});
	    return (
	      <div className="App">
	      	<h1>Question goes here!</h1>
	      	{this.props.question.qtext}
	      	<form onSubmit={this.checkAnswer} >
	      		{optionsArray}
	      		<input type="submit" />
	      	</form>
	      </div>
	    );
	}
}

export default Question;
