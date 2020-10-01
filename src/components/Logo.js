import React, {memo} from "react"
import {Link} from "react-router-dom"
import logo from "../assets/img/logo.svg"

const Logo = () => {
  return (
    <Link to="/" className="logo">
      <img src={logo} alt="Pizza logo" className="logo__icon" />
      <div>
        <h1>Pizza Delivery</h1>
        <span>Best pizza in the universe</span>
      </div>
    </Link>
  )
}

export default memo(Logo)
