import React from "react";
import "./styles/profile.css";
import profile from "./images/image-jeremy.png";
import { Link } from "react-router-dom";
function Profile(props) {
  return (
    <div className="profile-main-container">
      <div className="profile-container">
        <span className="profile-image-container">
          <img src={profile} alt="" />
        </span>
        <span className="profile-content-container">
          <span id="report">Report for</span>
          <span id="profile-name">Jeremy Robson</span>
        </span>
      </div>
      <div className="period-list">
        <Link
          to="/"
          className={props.selected === "Daily" ? "link link--active" : "link"}
          onClick={() => props.changeItem("Daily")}
        >
          Daily
        </Link>
        <Link
          to="/"
          className={props.selected === "Weekly" ? "link link--active" : "link"}
          onClick={() => props.changeItem("Weekly")}
        >
          Weekly
        </Link>
        <Link
          to="/"
          className={
            props.selected === "Monthly" ? "link link--active" : "link"
          }
          onClick={() => props.changeItem("Monthly")}
        >
          Monthly
        </Link>
      </div>
    </div>
  );
}

export default Profile;
