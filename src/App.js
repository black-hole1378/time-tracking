import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Container from "./Component/Container";
function App() {
  return (
    <React.Fragment>
      <Router>
        <Container />
      </Router>
    </React.Fragment>
  );
}

export default App;
