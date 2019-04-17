import React, { Component } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export default class Products extends Component {
  constructor() {
    super()

    this.state = {
      products: []
    }
  }

  componentDidMount() {
    axios.get("https://practiceapi.devmountain.com/products")
      .then(res => {
        this.setState({
          products: res.data
        })
      })
      .catch(err => {
        console.log(`GET products err ${err}`)
      })
  }

  render() {

    let products = this.state.products.map((product, i) => {
      return <Link key={i} to={`/details/${product.id}`}>
        <img src={product.image} width="200" alt="#" />
      </Link>
    })

    return (
      <div>
        <h1>Products</h1>
        {products}
      </div>
    )
  }
}