import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";



class App extends Component {

  state = {
    userInput: ""
  }

  handleInputChange = (event) => {
    this.setState({
      userInput: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <input onChange={this.handleInputChange}></input>
        <div>{this.state.userInput}</div>
      </div>
    );
  }
}

export default App;




