import React, { Component } from 'react';
import './App.css';

import Quiz from './Quiz.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Test</h2>
        <Quiz />
      </div>
    );
  }
}

export default App;
