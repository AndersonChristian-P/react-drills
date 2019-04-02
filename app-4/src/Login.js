import React, { Component } from 'react'

class Login extends Component {

  //TAKE-IN
  //username
  //password

  //RETURN
  //alert

  state = {
    password: "",
    username: ""
  }

  handleUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handlePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleClick = () => {
    alert(`Username: ${this.state.username} Password: ${this.state.password}`)
  }

  render() {
    return (
      <div>
        <input onChange={this.handleUsername}></input>
        <input onChange={this.handlePassword}></input>
        <button onClick={this.handleClick}>Login</button>

      </div>

    )
  }

}

export default Login