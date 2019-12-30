import React from 'react'
import './Person.css'

const person = (props) => {
  return (<div className="Person">
    <h1 onClick={props.click}>Hi I am {props.name}
      {" "}
      and my age is {props.age}</h1>
    <input type="text" onChange={props.changed} value={props.name}/>
  </div>);
}

export default person;
