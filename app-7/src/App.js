import React, { Component } from 'react'
import "./App.css"
import NewTask from "./NewTask"
import List from "./List"


class App extends Component {

  state = {
    list: []
  }
  //split the string by word
  //combine words into an array
  //push array into list

  handleAddTask = () => {
    this.setState({
      list: [...this.state.list, this.state.input]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <NewTask add={this.handleAddTask} />
        <List tasks={this.state.list} />
      </div>
    );
  }
}

export default App



