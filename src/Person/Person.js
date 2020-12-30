import React from "react";
import "./Person.css";

const person = (props) => {
  return (
    <div className="Person">
      <h1 className="person-name">
        I'm {props.name} and I eat {props.age} bananas a day
      </h1>
      <p>{props.children}</p>
      <input type="text" onChange={props.change} value={props.name} />
    </div>
  );
};

export default person;
