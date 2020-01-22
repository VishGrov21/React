import React, { useState } from "react";
import "./App.css";
import Person from "../../components/Persons/Person/Person";
import Persons from "../../components/Persons/Persons";

const App = props => {
  const [personState, setPersonState] = useState({
    person: [
      {
        name: "Max",
        age: 28
      },
      {
        name: "Manu",
        age: 29
      }
    ]
  });

  const [otherState, setOtherState] = useState({ other: "Some Text" });
  const [showPersonState, setShowPersonState] = useState({ showPerson: false });

  const switchNameHandler = newName => {
    setPersonState({
      person: [
        {
          name: newName,
          age: 24
        },
        {
          name: "Manu",
          age: 29
        }
      ]
    });
  };

  const nameChangeHandler = event => {
    setPersonState({
      person: [
        {
          name: "Max",
          age: 24
        },
        {
          name: event.target.value,
          age: 29
        }
      ]
    });
  };
  const togglePersonHandler = () => {
    const currentPersonState = showPersonState.showPerson;
    setShowPersonState({
      showPerson: !currentPersonState
    });
  };

  let persons = null;

  if (showPersonState.showPerson) {
    persons = (
      <div>
        <Persons person={personState.person} changed={nameChangeHandler} />
      </div>
    );
  }

  return (
    <div className="App">
      <button onClick={togglePersonHandler}>Toggle Person</button>
      {persons}
    </div>
  );
};

export default App;
