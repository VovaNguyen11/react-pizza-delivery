import React, {memo} from "react"
import {useMediaQuery} from "react-responsive"
import {Link} from "react-router-dom"

import Logo from "./Logo"
import CartIcon from "../assets/img/cart.svg"

type HeaderProps = {
  orderPrice: number
  orderCount: number
}

const Header: React.FC<HeaderProps> = ({orderPrice, orderCount}) => {
  const isMobile = useMediaQuery({query: "(max-width: 640px)"})
  return (
    <header className="header">
      <Logo />
      {isMobile ? (
        <Link to="/cart" className=" button button--cart-mobile">
          <img src={CartIcon} alt="" />
          <span>{orderCount}</span>
        </Link>
      ) : (
        <Link to="/cart" className="button button--cart">
          <span>{orderPrice} $</span>
          <div className="button__delimiter"></div>
          <img src={CartIcon} alt="" />
          <span>{orderCount}</span>
        </Link>
      )}
    </header>
  )
}

export default memo(Header)
