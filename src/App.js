import React, { Component } from 'react';
import './App.css';
import Login from './Authentication/Login/LoginComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login/>
      </div>
    );
  }
}

export default App;
