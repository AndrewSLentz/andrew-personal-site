import React, { Component } from 'react';
import background from './background.png';
import andrew from './Andrew.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>{'{' + 'Andrew S. Lentz' + '}'}</h2>
          <img src={andrew} alt='me!' />
          <h3>Front End Engineer</h3>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
