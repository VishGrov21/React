import React from "react";
import UserOutput from "./UserOutput";
import "./UserInput.css";

const setStyle = {
  border: "1px solid #000",
  borderRadius: "10px",
  boxShadow: "0px 2px 5px #ccc",
  height: "20px"
};

const UserInput = props => {
  return (
    <div className="userInput">
      <p>
        {" "}
        Enter Your Name:{" "}
        <input
          type="text"
          onChange={props.changed}
          value={props.username}
          style={setStyle}
        />
      </p>
    </div>
  );
};

export default UserInput;
