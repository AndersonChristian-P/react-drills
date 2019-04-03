import React, { Component } from "react";
import Todo from "./Todo"
import "./App.css";

class App extends Component {

  state = {
    list: [],
    input: ""
  }

  handleInputChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }


  handleAddTask = () => {
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

          <button onClick={this.handleAddTask}>Add</button>
        </div>

        <br />

        {list}

      </div>
    );
  }
}

export default App;
