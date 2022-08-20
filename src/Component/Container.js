import React from "react";
import DeacreasIncrease from "./DeacreasIncrease";
import Profile from "./Profile";
import "./styles/Container.css";
import ReplyIcon from "@mui/icons-material/Reply";
import { CommentContent } from "./styles/component_style";
function Container(props) {
  const {
    id,
    content,
    createAt,
    score,
    user: { name, image },
  } = props.comment;

  return (
    <div className="main-comment-container container-fluid" id={id}>
      <div className="left-container">
        <DeacreasIncrease score={score} />
      </div>
      <div className="right-container">
        <div className="top-container">
          <div id="left">
            <Profile
              profileImage={image}
              isOnlyImage={false}
              profileName={name}
            />
            <p id="timeline-date">{createAt}</p>
          </div>
          <button type="button" onClick={() => props.reply(id)}>
            {<ReplyIcon className="icon" />} Reply
          </button>
        </div>
        <div className="bottom-bontainer">
          <CommentContent>{content}</CommentContent>
        </div>
      </div>
    </div>
  );
}

export default Container;
