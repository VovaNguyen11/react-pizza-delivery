import React from "react"
import {Route, Switch} from "react-router-dom"

import HomePage from "../pages/HomePage"

const App = () => {
  return (
    <div className="container">
      <div className="app">
        <div className="content">
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default App
