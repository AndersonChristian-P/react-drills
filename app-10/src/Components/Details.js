import React, { Component } from "react"
import axios from "axios"

export default class Details extends Component {
  constructor() {
    super()

    this.state = {
      product: {}
    }
  }

  componentDidMount() {
    axios.get(`https://practiceapi.devmountain.com/products/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          product: res.data
        })
      })
      .catch(err => {
        console.log(`GET details err ${err}`)
      })
  }

  render() {

    let { product } = this.state

    return (
      <div>
        <h1>{product.title}</h1>
        <img src={product.image} width="400" alt="#" />
        <h4>{`Price: ${product.price}.00`}</h4>
      </div>
    )
  }
}