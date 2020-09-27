import React from "react"
import {connect} from "react-redux"
import {Link} from "react-router-dom"

import Logo from "../components/Logo"
import CartIcon from "../assets/img/cart.svg"
const Header = ({cart}) => {
  return (
    <header className="header">
      <Logo />
      <Link to="/cart" className="button button--cart">
        <span>{cart.orderSum} $</span>
        <div className="button__delimiter"></div>
        <img src={CartIcon} alt="" />
        <span>{cart.items.length}</span>
      </Link>
    </header>
  )
}

const mapStateToProps = ({cart}) => ({
  cart,
})

export default connect(mapStateToProps)(Header)
