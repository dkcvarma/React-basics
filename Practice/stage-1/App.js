import React, { Component } from 'react';
// import React, { useState } from 'react';
import classes from './App.css';
// import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

class App extends Component {
  state = {
    persons: [
      { id: 'sw', name: 'Max', age: 28 },
      { id: 'fw', name: 'Manu', age: 29 },
      { id: 'bw', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  // switchNameHandler = (newName) => {
  //   // console.log('Was Clicked!');
  //   // DON'T DO THIS this.state.persons[0].name = 'Maximilian';
  //   this.setState( {
  //     persons: [
  //       { name: newName, age: 28 },
  //       { name: 'Manu', age: 29 },
  //       { name: 'Stephanie', age: 27 }
  //     ]
  //   } )
  // }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    // this.setState( {
    //   persons: [
    //     { name: 'Max', age: 28 },
    //     { name: event.target.value, age: 29 },
    //     { name: 'Stephanie', age: 27 }
    //   ]
    // } )

    this.setState( {persons: persons} );
  }

  deletePersonHandler = (PersonIndex) => {
    // const persons = this.state.persons; // here we are changing original thing
    // const persons = this.state.persons.slice(); // here we are creating copy
    const persons = [...this.state.persons];
    persons.splice(PersonIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  } 

  render() {
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer'
    //   // ':hover': {
    //   //   backgroundColor: 'lightgreen',
    //   //   color: 'black'
    //   // } //random is required 
    // };

    let persons = null;
    let btnClass = '';

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={Person.id}>
              <Person 
                click={() => this.deletePersonHandler(index)}
                name={person.name} 
                age={Person.age} 
                changed={(event) => this.nameChangedHandler(event, person.id)} />
           </ErrorBoundary>
          })}
        </div>
      );

      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
      btnClass = classes.Red;
    }

    // let assignedclasses = ['red', 'bold'].join(' ');
    let assignedclasses = [];
    if (this.state.persons.length <= 2) {
        // assignedclasses.push('red');
        assignedclasses.push(classes.red);
    }
    if(this.state.persons.length <= 1) {
      // assignedclasses.push('bold');
      assignedclasses.push(classes.bold);
    }

    return (
      // <StyleRoot>
      // <div className="App">
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedclasses.join(' ')}>This is really working!</p>
        {/* <button onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Switch Name</button> */}
        {/* <button 
          style={style}
          onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button> */}
        <button 
          className={btnClass}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>        
        {/* { 
          this.state.showPersons ?
            <div>
              <Person 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age} />
              <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age} 
                click={this.switchNameHandler.bind(this, 'Max!')} 
                changed={this.nameChangedHandler} >My Hobbies: Racing</Person>
              <Person
                name={this.state.persons[2].name} 
                age={this.state.persons[2].age} />
            </div> : null
        }         */}
        {persons}
      </div>
      // {/* </StyleRoot> */}
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'));
  }
}

export default App;
// export default Radium(App);

// const app = props => {
//   const [ personsState, setPersonsState ] = useState({
//     persons: [
//       { name: 'Max', age: 28 },
//       { name: 'Manu', age: 29 },
//       { name: 'Stephanie', age: 26 }
//     ]
//     // otherState: 'some other value'
//   });

//   const [otherState, setOtherState] = useState('some ither value');

//   const switchNameHandler = () => {
//     setPersonsState( {
//       persons: [
//         { name: 'Maximilian', age: 28 },
//         { name: 'Manu', age: 29 },
//         { name: 'Stephanie', age: 27 }
//       ]
//       // otherState: personsState.otherState
//     });
//   };

//   return (
//     <div className="App">
//       <h1>Hi, I'm a React App</h1>
//       <p>This is really working!</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age} >My Hobbies: Racing</Person>
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
//     </div>
//   );
// }

// export default app;