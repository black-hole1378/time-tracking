import React from "react";

function Comment() {
  const style = {
    resize: "none",
    border: "1px solid hsl(239, 57%, 85%)",
    height: 70,
  };
  return <textarea style={style} cols="80" rows="1" className="form-control" />;
}

export default Comment;
