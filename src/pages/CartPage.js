import React from "react"
import {Link} from "react-router-dom"

import Logo from "../components/Logo"
import cartEmptyImage from "../assets/img/empty-cart.png"

const CartPage = () => {
  return (
    <div className="container">
      <header className="header">
        <Logo />
      </header>
      <main>
        <div className="cart cart--empty">
          <h3>
            Cart is empty <i>😕</i>
          </h3>
          <p>
            Seems like you haven't ordered any pizza yet.
            <br />
            Just go to main page and order our marvellous pizzas
          </p>
          <img src={cartEmptyImage} alt="Empty cart" />
          <Link to="/" className="button button--black">
            Back o main page
          </Link>
        </div>
      </main>
    </div>
  )
}

export default CartPage
