import React from "react";
import Person from "./Person/Person";

const persons = props =>
  props.person.map((person, index) => {
    return (
      <Person
        name={person.name}
        age={person.age}
        changed={event => props.changed(event, person.index)}
        key={index}
      />
    );
  });

export default persons;
