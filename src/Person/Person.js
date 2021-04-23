import React from "react";
import "./Person.css";

const person = (props) => {
  return (
    <div className="Person">
      <h1 className="person-name">
        I'm {props.name} and I eat {props.age} bananas a day
      </h1>
      <p>{props.children}</p>
      <input type="text" onChange={props.changeName} value={props.name} />
      <input type="button" onClick={props.deleteMe} value="delete me" />
    </div>
  );
};

export default person;
