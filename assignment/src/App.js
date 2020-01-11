import React, { useState } from "react";
import "./App.css";
// import UserInput from "./component/first-assignment/UserInput";
// import UserOutput from "./component/first-assignment/UserOutput";
import ValidationComponent from "./component/second-assignment/ValidationComponent";
import CharComponent from "./component/second-assignment/CharComponent";

function App(props) {
  // First assignment
  //
  // const [inputState, setInputState] = useState({username: "Simon Sinek"});
  //
  // const eventHandlerForNameChange = (event) => {
  //   setInputState({username: event.target.value})
  // };
  //
  // return (<div className="App">
  //   <UserInput changed={eventHandlerForNameChange} username={inputState.username}/>
  //   <UserOutput name={"Vishal Grover"} username={inputState.username}/>
  // </div>);

  // Second assignment
  const [nameState, setName] = useState({ name: { name: "", nameLength: 0 } });

  const lengthOfInputTextHandler = event => {
    let name = event.target.value;
    let nameLength = 0;
    nameLength = name.length;
    setName({ name: { name: name, nameLength: nameLength } });
  };

  let nameArray = null;
  nameArray = nameArray = nameState.name.name.split("");

  const deleteCharHandler = index => {
    const newNameArray = nameArray;
    newNameArray.splice(index, 1);
    nameArray = newNameArray.join("");
    setName({
      name: { name: nameArray, nameLength: nameArray.length }
    });
  };

  let character = (
    <div>
      {nameArray.map((char, index) => (
        <CharComponent
          char={char}
          key={char + "x"}
          click={() => deleteCharHandler(index)}
        />
      ))}
    </div>
  );

  return (
    <div>
      <label htmlFor="inputField" value="Name" />
      Name
      <input
        type="text"
        id="inputField"
        onChange={lengthOfInputTextHandler}
        value={nameState.name.name}
      />
      <p>The length of the entered text is {nameState.name.nameLength}</p>
      <ValidationComponent nameLength={nameState.name.nameLength} />
      {character}
    </div>
  );
}

export default App;
