import React from "react";
import "./styles/decrease.css";
function DeacreasIncrease(props) {
  return (
    <div className="degree-container">
      <button type="button">+</button>
      <span type="decree-content">{props.score}</span>
      <button type="button">-</button>
    </div>
  );
}

export default DeacreasIncrease;
