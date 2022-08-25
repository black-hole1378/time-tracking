import React from "react";
import "./styles/card.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
function Card(props) {
  const { current, previous } = props.select;

  const { title, address, color } = props.data;

  const style = {
    backgroundColor: color,
  };

  return (
    <div className="main-card-container" style={style}>
      <div className="top-card-container">
        <img src={require(`${address}`)} alt="" />
      </div>
      <div className="bottom-card-container">
        <div className="top-card-flex">
          <span id="title">{title}</span>
          <button type="button">
            <MoreHorizIcon id="icon" />
          </button>
        </div>
        <div className="bottom-card-flex">
          <span id="current-content">{current}hrs</span>
          <span id="previous-content">Last Week - {previous}hrs</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
