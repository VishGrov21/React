import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';

const App = (props) => {

  const [personState, setPersonState] = useState({
    person: [
      {
        name: 'Max',
        age: 28
      }, {
        name: 'Manu',
        age: 29
      }
    ]
  });

  const [otherState, setOtherState] = useState({other: "Some Text"});

  const switchNameHandler = (newName) => {
    setPersonState({
      person: [
        {
          name: newName,
          age: 24
        }, {
          name: "Manu",
          age: 29
        }
      ]
    });
  };

  const nameChangeHandler = (event) => {
    setPersonState({
      person: [
        {
          name: "Max",
          age: 24
        }, {
          name: event.target.value,
          age: 29
        }
      ]
    });
  }
  return (<div className="App">
    <button onClick={switchNameHandler.bind(this, 'Karan')}>Change Name</button>
    <Person name={personState.person[0].name} age={personState.person[0].age} click={switchNameHandler.bind(this, 'Vishal')}/>
    <Person name={personState.person[1].name} age={personState.person[1].age} changed={nameChangeHandler}/>
  </div>);
};

export default App;
