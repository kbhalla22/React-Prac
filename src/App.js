import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person';


class App extends Component {
  state={
    persons:[{name:'Max',age:28},{name:'Kanu',age:25},{name:'rashi',age:23}]
  }
  switchNameHandler= ()=>{
    console.log('was clicked');
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, i am a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name 1</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
   // return React.createElement('div',{className: 'App'},null,React.createElement('h1',null,'Does this work now?'));
  }
}

export default App;
