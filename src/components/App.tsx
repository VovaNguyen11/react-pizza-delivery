import React, {lazy, Suspense} from "react"
import {Location} from "history"
import {StaticContext} from "react-router"

import {
  Redirect,
  Route,
  Switch,
  useLocation,
  RouteComponentProps,
  withRouter,
} from "react-router-dom"
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import HomePage from "../pages/HomePage"
import PizzaModal from "./pizza/PizzaModal"

const CartPage = lazy(() => import("../pages/CartPage"))

type LocationState = {
  background: any,
}

const App = (props: RouteComponentProps<{}, StaticContext, LocationState>) => {
  const background = props.location.state && props.location.state.background

  return (
    <div className="container">
      <div className="app">
        <Suspense fallback={<div>Loading..</div>}>
          <Switch location={background || window.location}>
            <Route exact path="/" children={<HomePage />} />
            {/* <Route path="/cart" children={<CartPage />} /> */}
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
