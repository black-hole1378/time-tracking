import { Component } from "react";
import Effect from "./Component/Effect";
import Header from "./Component/Header";
import Dynamic from "./Component/dynamic";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Effect />} />
            <Route exact path="/header" element={<Header />} />
            <Route exact path="/effect" element={<Effect />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
