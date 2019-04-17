import React from "react"
import { Link } from "react-router-dom"

const Links = () => {
  return (
    <nav>
      <Link to="/" >Home</Link>
      <Link to="/signup" >SignUp</Link>
      <Link to="/details" >Details</Link>
    </nav>
  )
}

export default Links

