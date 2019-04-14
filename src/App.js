import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, i am a React App</h1>
        <p>This is really working!</p>
        <Person name="Max" age="28"/>
        <Person name="Karan" age="25">My hobbies:Cooking</Person>
        <Person name="Hem" age="26"/>
      </div>
    );
   // return React.createElement('div',{className: 'App'},null,React.createElement('h1',null,'Does this work now?'));
  }
}

export default App;
