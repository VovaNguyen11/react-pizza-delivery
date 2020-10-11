import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
import {BrowserRouter as Router} from "react-router-dom"
import "./assets/scss/index.scss"

import App from "./components/App"

import store from "./redux/store"

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
)
