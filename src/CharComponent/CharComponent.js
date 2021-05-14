import React from "react";
import "./CharComponent.css";

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const CharComponent = (props) => {
  const color = getRandomColor();
  return (
    <div style={{ color: color, borderColor: color }} className="CharComponent">
      {props.letter}
    </div>
  );
};

export default CharComponent;
