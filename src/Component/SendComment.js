import React, { useEffect } from "react";
import profileImage from "./avatars/image-amyrobson.png";
import Profile from "./Profile";
import "./styles/sendComment.css";
import Comment from "./Comment";
import $ from "jquery";
function SendComment(props) {
  useEffect(() => {}, []);

  return (
    <div className="comment-container container-fluid">
      <Profile profileImage={props.profileImage} isOnlyImage={true} />
      <Comment />
      <button
        type="button"
        className="btn btn-primary"
        onClick={props.pushNewValue}
      >
        Send
      </button>
    </div>
  );
}

export default SendComment;
