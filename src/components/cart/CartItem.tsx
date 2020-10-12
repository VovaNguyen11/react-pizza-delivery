import React, {memo} from "react"
import {connect, ConnectedProps} from "react-redux"
import {IPizzaCart} from "../../types/cart"

import {
  removePizzaCartAction,
  plusPizzaCartAction,
  minusPizzaCartAction,
} from "../../redux/actions/cart"

import {Button} from "../../components"

type CartItemProps = PropsFromRedux & {
  item: IPizzaCart
  itemCount: number
  itemPrice: number
}

const CartItem: React.FC<CartItemProps> = ({
  item: {id, imageUrl, name, type, size},
  itemCount,
  itemPrice,
  removePizzaCartAction,
  plusPizzaCartAction,
  minusPizzaCartAction,
}) => {
  const onPlusItem = (id: string) => (e: React.MouseEvent<HTMLButtonElement>) =>
    plusPizzaCartAction(id)
  const onMinusItem = (id: string) => (
    e: React.MouseEvent<HTMLButtonElement>
  ) => minusPizzaCartAction(id)
  const onRemoveItem = (id: string) => (e: React.MouseEvent<HTMLDivElement>) =>
    removePizzaCartAction(id)

  return (
    <div className="cart__item">
      <div className="cart__item-info">
        <img src={imageUrl} alt="" />
        <div>
          <h3>{name}</h3>
          <p>
            {type}, {size} cm
          </p>
        </div>
      </div>
      <div className="cart__item-manage">
        <div className="cart__item-count">
          <Button className="button--circle" outline onClick={onMinusItem(id)}>
            <svg width="10" height="10">
              <rect fill="#60d060" y="4" width="10" height="2" rx="1"></rect>
            </svg>
          </Button>
          <span>{itemCount}</span>
          <Button className="button--circle" outline onClick={onPlusItem(id)}>
            <svg width="10" height="10">
              <g fill="#60d060">
                <rect x="4" width="2" height="10" ry="1"></rect>
                <rect y="4" width="10" height="2" rx="1"></rect>
              </g>
            </svg>
          </Button>
        </div>
        <div className="cart__item-price">
          <span>{itemPrice} $</span>
        </div>
      </div>
      <div className="cart__item-remove" onClick={onRemoveItem(id)}>
        <svg width="20" height="20" fill="none" className="sc-157hvfs-7 ZGosY">
          <path
            d="M14.75 6h-9.5l.66 9.805c.061 1.013.598 1.695 1.489 1.695H12.6c.89 0 1.412-.682 1.49-1.695L14.75 6z"
            fill="#373536"
          />
          <path
            d="M13.85 3.007H6.196C4.984 2.887 5.021 4.365 5 5h9.992c.024-.62.07-1.873-1.142-1.993z"
            fill="#373535"
          />
        </svg>
      </div>
    </div>
  )
}

const connector = connect(state => state, {
  removePizzaCartAction,
  plusPizzaCartAction,
  minusPizzaCartAction,
})
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(memo(CartItem))
