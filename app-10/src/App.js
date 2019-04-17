import React, { Component } from "react";
import { HashRouter as Router } from "react-router-dom"

import "./App.css";

import router from "./router"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {router}
        </div>
      </Router>

    );
  }
}

export default App;
