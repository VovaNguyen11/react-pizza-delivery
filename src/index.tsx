import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
import {BrowserRouter as Router} from "react-router-dom"

import store from "./redux/strore"

import App from "./components/App"

import "./assets/scss/index.scss"

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
)
