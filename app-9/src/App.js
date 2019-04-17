import React, { Component } from "react";
import { HashRouter as Router } from "react-router-dom"

import "./App.css";

import router from "./router"
import Links from "./Components/Links"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Links />
          {router}
        </div>
      </Router>
    );
  }
}

export default App;
