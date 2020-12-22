import React, { Component } from 'react';

import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons : [
      { id:"abcgd", name: "Saidul", age: 32 },
      { id:"abggd", name: "Sukhia", age: 27 },
      { id:"abufhgd", name: "Ishrat", age: 4 }
    ],
    showPerson: false
  }

  switchNameHandler = (newName) => {
    // console.log('was clicked!')
    this.setState({
      persons: [
        { name: newName, age: 32 },
        { name: "Sikha", age: 26 },
        { name: "Ishu", age: 3 }
      ]
    })
  }

  onChangeHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex((p)=>{
      return p.id = id;
    })

    const person = {
      ...this.state.persons[personIndex]
    }


    person.name=event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({
      persons : persons
    })
  }

  toggleHandler = () => {
    const doesShow = this.state.showPerson
    this.setState({ showPerson : !doesShow })
  }

  deletePersonHandler = (personIndex) =>{
    // const persons = this.state.persons.slice()
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons : persons })
  }

  render(){
    const style = {
      backgroundColor : "white",
      font : "inherit",
      border : "1px solid blue",
      padding : "8px",
      cursor : "pointer"
    }

    let persons = null;

    if (this.state.showPerson){
      persons = (
        this.state.persons.map((person, index)=>{
          return <Person 
          click={()=>this.deletePersonHandler(index)} 
          changed={(event)=>this.onChangeHandler(event, person.id)}
          name={person.name} 
          age={person.age} 
          key={person.id}
           />
        })
      )
    }

    return (
      <div className="App">
        <h1>This is Rivision-REACT</h1>
        <h2>let's crack the interview</h2>
        <button 
        style={style}
        onClick={this.toggleHandler}
        >Switch</button>
        {persons}
      </div>
    );
  }
  
}

export default App;



// import React, { useState } from 'react';

// import Person from './Person/Person';
// import './App.css';

// const App = (props) => {
//   const [setPerson, personHandler] = useState(
//     {
//       persons : [
//         { "name": "Saidul", "age": 32 },
//         { "name": "Sukhia", "age": 27 },
//         { "name": "Ishrat", "age": 4 }
//       ]
//     }
//   )

//   const switchNameHandler = () => {
//     // console.log('was clicked!')
//     personHandler({
//       persons: [
//       { "name": "Saidul", "age": 32 },
//       { "name": "Sikha", "age": 26 },
//       { "name": "Ishu", "age": 3 }
//       ]
//     })
//   }

//     return (
//       <div className="App">
//         <h1>This is Rivision-REACT</h1>
//         <h2>let's crack the interview</h2>
//         <button onClick={switchNameHandler}>Switch</button>
//         <Person name={setPerson.persons[0].name} age={setPerson.persons[0].age} />
//         <Person name={setPerson.persons[1].name} age={setPerson.persons[1].age} > Hobby: Cooking</Person>
//         <Person name={setPerson.persons[2].name} age={setPerson.persons[2].age} />
//       </div>
//     );
// }
  

// export default App;



