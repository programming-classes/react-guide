import { React } from "react";
const UserInput = (props) => {
  return (
    <input
      value={props.username}
      onChange={props.onUsernameChange}
      type="text"
    ></input>
  );
};

export default UserInput;
