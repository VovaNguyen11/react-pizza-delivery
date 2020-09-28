import React from "react"
import {connect} from "react-redux"

import {removePizzaCartAction} from "../../redux/actions/cart"

import Button from "../Button"

const CartItem = ({
  item: {id, imageUrl, name, type, size},
  removePizzaCartAction,
}) => {
  const handleRemove = id => e => {
    removePizzaCartAction(id)
  }
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
      <div className="cart__item-count">
        <Button className="button--circle" outline>
          <svg width="10" height="10">
            <rect fill="#60d060" y="4" width="10" height="2" rx="1"></rect>
          </svg>
        </Button>
        <span>2</span>
        <Button className="button--circle" outline>
          <svg width="10" height="10">
            <g fill="#60d060">
              <rect x="4" width="2" height="10" ry="1"></rect>
              <rect y="4" width="10" height="2" rx="1"></rect>
            </g>
          </svg>
        </Button>
      </div>
      <div className="cart__item-price">
        <span>22 $</span>
      </div>
      <div className="cart__item-remove" onClick={handleRemove(id)}>
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

const mapStateToProps = state => ({
  state,
})

export default connect(mapStateToProps, {removePizzaCartAction})(CartItem)
