import React from "react";
import Main from "./Component/Main";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <React.Fragment>
      <Router>
        <Main />
      </Router>
    </React.Fragment>
  );
}

export default App;
