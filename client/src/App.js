import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./style/main.scss";

import Routing from "./routes";

function App() {
  return (
    <Router>
      <div id="App" className="app">
        <Routing />
      </div>
    </Router>
  );
}

export default App;
