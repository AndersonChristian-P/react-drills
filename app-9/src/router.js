import React from "react"
import { Switch, Route } from "react-router-dom"

import Home from "./Components/Home"
import SignUp from "./Components/SignUp"
import Details from "./Components/Details"

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/signup" component={SignUp} />
    <Route path="/details" component={Details} />
  </Switch>
)