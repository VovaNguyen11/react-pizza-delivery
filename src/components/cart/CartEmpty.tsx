import React from "react"
import {Link} from "react-router-dom"

import cartEmptyImage from "../../assets/img/empty-cart.png"

const EmptyCart = () => {
  return (
    <div className="cart--empty">
      <h3>
        Cart is empty{" "}
        <span role="img" aria-label="sad emoji">
          😔
        </span>
      </h3>
      <p>
        It seems like you haven't ordered any pizza yet.
        <br />
        Just go to main page and order our marvellous pizzas
      </p>
      <img src={cartEmptyImage} alt="Empty cart" />
      <Link to="/" className="button button--black">
        Back to main page
      </Link>
    </div>
  )
}

export default EmptyCart
