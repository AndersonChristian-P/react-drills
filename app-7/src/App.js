import React, { Component } from "react";
import Todo from "./Todo"
import "./App.css";

class App extends Component {

  state = {
    list: [],
    input: ""
  }

  //split the string by word
  //combine words into an array
  //push array into list


  handleInputChange = (event) => {
    let str = event.target.value
    this.setState({
      input: str.split(" ")
    })
  }


  handleNewTask = () => {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ""
    })
  }


  render() {
    let list = this.state.list.map((item, i) => {
      return <Todo key={i} task={item} />
    })

    return (
      <div className="App">
        <h1>My to-do List:</h1>

        <div>
          <input placeholder="Enter New Task" onChange={this.handleInputChange} />

          <button onClick={this.handleNewTask}>Add</button>
        </div>

        <br />

        {list}

      </div>
    );
  }
}

export default App;
