import React from "react"
import CartItem from "./CartItem"

const CartList = ({items}) => {
  return (
    <div className="cart__list">
      {items.map(item => (
        <CartItem item={item} key={item.id} />
      ))}
    </div>
  )
}

export default CartList
