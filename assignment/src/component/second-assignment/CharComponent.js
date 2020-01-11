import React from "react";

const CharComponent = props => {
  const setStyle = {
    display: "inline-block",
    padding: "16px",
    textAlign: "center",
    margin: "16px",
    border: "1px solid black"
  };

  return (
    <div>
      <h1 style={setStyle} onClick={props.click}>
        {props.char}
      </h1>
    </div>
  );
};

export default CharComponent;
