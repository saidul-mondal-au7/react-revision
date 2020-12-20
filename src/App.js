import React, { Component } from 'react';

import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons : [
      { "name": "Saidul", "age": 32 },
      { "name": "Sukhia", "age": 27 },
      { "name": "Ishrat", "age": 4 }
    ]
  }

  switchNameHandler = () => {
    console.log('was clicked!')
  }

  render(){
    return (
      <div className="App">
        <h1>This is Rivision-REACT</h1>
        <h2>let's crack the interview</h2>
        <button onClick={this.switchNameHandler}>switch</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} > Hobby: Cooking</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
  
}

export default App;
