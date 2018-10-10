import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
 	state = {
        value1: Math.floor(Math.random() * 100),
        value2: Math.floor(Math.random() * 100),
        value3: Math.floor(Math.random() * 100),
        numQuestions: 0,
        numCorrect: 0,
 	}
	
	Validation = (proposedAnswer, decision) => {
      	console.log(proposedAnswer);
    	if (this.state.value1 + this.state.value2 + this.state.value3 == proposedAnswer){
        	decision == 'true' ? this.state.numCorrect += 1 : false; 
        }else{
        	decision == 'false' ? this.state.numCorrect += 1 : false;
        }
      
      	this.setState((prevState) => ({
        	value1 : Math.floor(Math.random() * 100),
            value2 : Math.floor(Math.random() * 100),
            value3 : Math.floor(Math.random() * 100),
            numQuestions : prevState.numQuestions + 1,
        }));
    }

  render() {
    const proposedAnswer = Math.floor(Math.random() * 3) + this.state.value1 + this.state.value2 + this.state.value3;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${proposedAnswer}`}</p>
          </div>
          <button onClick={ () => this.Validation(proposedAnswer, 'true') }>True</button>
          <button onClick={ () => this.Validation(proposedAnswer, 'false') }>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
