import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {

  state = {
    foods: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"]
  }

  render() {
    let foodsToDisplay = this.state.foods.map((food, index) => {
      return <h3 key={index}>{food}</h3>
    })

    return (
      <div className="App">
        {foodsToDisplay}
      </div>
    );
  }
}

export default App;
