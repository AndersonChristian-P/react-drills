import React, { Component } from "react";
import Image from "./Image"
import "./App.css";

class App extends Component {

  state = {
    imageUrl: "https://www.indiewire.com/wp-content/uploads/2018/02/screen-shot-2018-02-05-at-8-56-33-am.png?w=780"
  }

  render() {
    return (
      <div className="App">
        <Image imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
