import React, {useState} from 'react';
import './App.css';
import UserInput from './component/first-assignment/UserInput'
import UserOutput from './component/first-assignment/UserOutput'

function App(props) {
  const [inputState, setInputState] = useState({username: "Simon Sinek"});

  const eventHandlerForNameChange = (event) => {
    setInputState({username: event.target.value})
  };

  return (<div className="App">
    <UserInput changed={eventHandlerForNameChange} username={inputState.username}/>
    <UserOutput name={"Vishal Grover"} username={inputState.username}/>
  </div>);
}

export default App;
