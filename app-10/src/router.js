import React from "react"
import { Route, Switch } from "react-router-dom"

import Products from "./Components/Products"
import Details from "./Components/Details"

export default (
  <Switch>
    <Route exact path="/" component={Products} />
    <Route path="/details/:id" component={Details} />
  </Switch>
)