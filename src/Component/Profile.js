import React from "react";
import { Link } from "react-router-dom";
function Profile(props) {
  const style1 = {
    width: 30,
    height: 30,
    borderRadius: "50%",
  };

  const style2 = {
    color: "black",
    fontSize: "0.6rem",
    fontWeight: "bold",
    marginTop: 10,
  };

  const style3 = {
    display: "flex",
    gap: 8,
    outline: "none",
    textDecoration: "none",
    alignItems: "center",
  };

  let content;

  if (props.isOnlyImage) {
    content = (
      <Link to="/">
        <img style={style1} src={require(`${props.profileImage}`)} alt=""></img>
      </Link>
    );
  } else {
    content = (
      <Link to="/" style={style3}>
        <img style={style1} src={require(`${props.profileImage}`)} alt=""></img>
        <p style={style2}>{props.profileName}</p>
      </Link>
    );
  }

  return <React.Fragment>{content}</React.Fragment>;
}

export default Profile;
