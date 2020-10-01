import React, {memo} from "react"
import PropTypes from "prop-types"

import {Link} from "react-router-dom"

import Logo from "../components/Logo"
import CartIcon from "../assets/img/cart.svg"

const Header = ({orderPrice, orderCount}) => {
  return (
    <header className="header">
      <Logo />
      <Link to="/cart" className="button button--cart">
        <span>{orderPrice} $</span>
        <div className="button__delimiter"></div>
        <img src={CartIcon} alt="" />
        <span>{orderCount}</span>
      </Link>
    </header>
  )
}

Header.propTypes = {
  orderPrice: PropTypes.number.isRequired,
  orderCount: PropTypes.number.isRequired,
}

export default memo(Header)
