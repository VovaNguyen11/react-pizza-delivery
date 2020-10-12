import React, {lazy, Suspense} from "react"
import {StaticContext} from "react-router"
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import {
  Redirect,
  Route,
  Switch,
  RouteComponentProps,
  withRouter,
} from "react-router-dom"

import {PizzaModal} from "../components"
import HomePage from "../pages/HomePage"
const CartPage = lazy(() => import("../pages/CartPage"))

type LocationState = {
  background: any
}

const App: React.FC<RouteComponentProps<{}, StaticContext, LocationState>> = ({
  location,
}) => {
  const background = location.state && location.state.background

  return (
    <div className="container">
      <div className="app">
        <Suspense fallback={<div>Loading..</div>}>
          <Switch location={background || location}>
            <Route exact path="/" children={<HomePage />} />
            <Route path="/cart" children={<CartPage />} />
            <Route children={<Redirect to="/" />} />
          </Switch>
          {background && <Route path="/pizzas/:id" component={PizzaModal} />}
        </Suspense>
        <ToastContainer
          position="bottom-left"
          autoClose={2500}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          closeButton={false}
        />
      </div>
    </div>
  )
}

export default withRouter(App)
