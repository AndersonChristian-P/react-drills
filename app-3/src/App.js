import React, { Component } from "react";

import "./App.css";

class App extends Component {

  state = {
    text: "",
    foods: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"]
  }

  handleOnChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }


  render() {

    let foodsToDisplay = this.state.foods.filter((food, i) => {
      return food.includes(this.state.text)
    }).map((food, i) => {
      return <h2 key={i}>{food}</h2>
    })


    return (
      <div className="App">
        <input onChange={this.handleOnChange} />
        {foodsToDisplay}
      </div>
    );
  }
}

export default App;
