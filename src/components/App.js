import React, {lazy, Suspense} from "react"
import {Route, Switch, useLocation} from "react-router-dom"

import HomePage from "../pages/HomePage"
import PizzaModal from "../components/pizza/PizzaModal"

const CartPage = lazy(() => import("../pages/CartPage"))

const App = () => {
  const location = useLocation()
  const background = location.state && location.state.background

  return (
    <div className="container">
      <div className="app">
        <Suspense fallback={<div>Loading..</div>}>
          <Switch location={background || location}>
            <Route exact path="/" children={<HomePage />} />
            <Route exact path="/cart" children={<CartPage />} />
          </Switch>
          <Route path="/pizzas/:id" children={<PizzaModal />} />
        </Suspense>
      </div>
    </div>
  )
}

export default App
