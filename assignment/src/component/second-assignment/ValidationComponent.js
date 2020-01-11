import React from "react";

const lengthOfText = length => {
  if (length <= 5) {
    return <p>Text is too short</p>;
  } else {
    return <p>Text is Long enough</p>;
  }
};

const ValidationComponent = props => {
  return <div>{lengthOfText(props.nameLength)}</div>;
};

export default ValidationComponent;
