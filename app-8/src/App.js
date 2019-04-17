import React, { Component } from "react";
import axios from "axios"

import "./App.css";

class App extends Component {

  constructor() {
    super()

    this.state = {
      character: {}
    }
  }

  componentDidMount() {
    axios.get("https://swapi.co/api/people/4")
      .then(res => {
        this.setState({
          character: res.data
        })
      })
      .catch(err => {
        console.log(`GET err ${err}`)
      })
  }


  render() {
    return (
      <div className="App">
        <h1>Star Wars Character</h1>
        <br />
        <h2>Name: {this.state.character.name}</h2>
        <h2>Birth Year: {this.state.character.birth_year}</h2>
        <h2>Height: {this.state.character.height} cm</h2>
        <h2>Eye Color: {this.state.character.eye_color}</h2>
        <br />
        <h2>API: <a href="https://swapi.co">SWAPI</a></h2>


      </div>
    );
  }
}

export default App;
