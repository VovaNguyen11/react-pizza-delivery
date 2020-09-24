import React from "react"
import {Route, Switch} from "react-router-dom"

import HomePage from "../pages/HomePage"

const App = () => {
  
  return (
    <div className="container">
      <div className="app">
        <Switch>
          <Route exact path="/" component={HomePage} />
          {/* <Route path="/pizza/:id" render={}/> */}
        </Switch>
      </div>
    </div>
  )
}

export default App
