import React from "react"
import CartItem from "./CartItem"

const CartList = ({items}) => {
  const addedPizzas = Object.keys(items).map(key => {
    return items[key].item
  })
  return (
    <div className="cart__list">
      {addedPizzas.map(item => (
        <CartItem
          item={item}
          key={item.id}
          itemPrice={items[item.id].itemPrice}
          itemCount={items[item.id].itemCount}
        />
      ))}
    </div>
  )
}

export default CartList
