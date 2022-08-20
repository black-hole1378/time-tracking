import React from "react";
import Container from "./Container";
function Reply() {
  const detail = {
    name: "Mohammad",
    lastName: "Hadi",
    getCall: getCall,
  };

  const getCall = () => {
    console.log("Hello");
  };
  return (
    <div>
      <Container {...detail} />
    </div>
  );
}

export default Reply;
