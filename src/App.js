import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import routes from './route'

class App extends Component {
  render() {
    return (
      <div className="App">
       {routes}
      </div>
    );
  }
}

export default App;
