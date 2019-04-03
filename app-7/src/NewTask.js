import React, { Component } from 'react'

class NewTask extends Component {

  state = {
    input: ""
  }

  handleInputChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  handleAdd = () => {
    this.props.add(this.state.input)
    this.setState({
      input: ""
    })
  }

  render() {
    return (
      <div>
        <input
          value={this.state.input}
          placeholder="Enter New Task"
          onChange={this.handleInputChange}
        />

        <button onClick={this.handleAdd} >Add</button>

      </div>
    )
  }
}

export default NewTask