import React from "react";

const ValidationComponent = (props) => {
  return (
    <div>
      <p>{props.wordLength}</p>
      <p>{props.wordLength < 7 ? "Text too short" : "Text long enough"}</p>
    </div>
  );
};

export default ValidationComponent;
