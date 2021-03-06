import React from "react";
import cssPersonClass from "./Person.module.css";

const person = props => {
  return (
    <div className={cssPersonClass.Person}>
      <h1 onClick={props.click}>
        Hi I am {props.name} and my age is {props.age}
      </h1>
      <input type="text" onChange={props.changed} />
    </div>
  );
};

export default person;
