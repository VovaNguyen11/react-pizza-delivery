import React, {memo} from "react"
import {ICartItems, IPizzaCart} from "../../types/cart"

import {CartItem} from "../../components"

type CartListProps = {
  items: ICartItems
}

const CartList: React.FC<CartListProps> = ({items}) => {
  const addedPizzas = Object.keys(items).map(key => {
    return items[key].item
  })

  return (
    <div className="cart__list">
      {addedPizzas.map((item: IPizzaCart) => (
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

export default memo(CartList)
