import React, {component} from 'react'
import './UserOutput.css'

const UserOutput = (props) => {
  return(
    <div className="userOutput">
    <p> This is the name of this webpage creator: {props.name} </p>
    <p> This is the User Name that I have used: {props.username} </p>
    </div>
  );
}

export default UserOutput;
