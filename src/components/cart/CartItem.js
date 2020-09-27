import React from "react"

const CartItem = ({item: {imageUrl, name, type, size}}) => {
  return (
    <div className="cart__item">
      <div className="cart__item-info">
        <img src={imageUrl} alt="" />
        <div>
          <h3>{name}</h3>
          <p>
            {type} 30cm standart{size}
          </p>
        </div>
      </div>
      <div className="cart__item-count">
        <span>2</span>
      </div>
      <div className="cart__item-price">
        <span>22 $</span>
      </div>
      <div className="cart__item-remove">
        <svg width="20" height="20" fill="none" className="sc-157hvfs-7 ZGosY">
          <path
            d="M14.75 6h-9.5l.66 9.805c.061 1.013.598 1.695 1.489 1.695H12.6c.89 0 1.412-.682 1.49-1.695L14.75 6z"
            fill="#373536"
          ></path>
          <path
            d="M13.85 3.007H6.196C4.984 2.887 5.021 4.365 5 5h9.992c.024-.62.07-1.873-1.142-1.993z"
            fill="#373535"
          ></path>
        </svg>
      </div>
    </div>
  )
}

export default CartItem
