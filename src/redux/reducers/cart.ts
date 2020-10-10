import {IPizzaCart, ICartState, CartActionType} from "./../../types/cart"
import {
  ADD_PIZZA_CART,
  REMOVE_PIZZA_CART,
  PLUS_PIZZA_CART,
  MINUS_PIZZA_CART,
  CLEAR_CART,
} from "../types_constants"

const initState: ICartState = {
  order: {},
  orderPrice: 0,
  orderCount: 0,
}

const roundPrice = (price: number) => Math.round(price * 100) / 100

const cart = (state = initState, action: CartActionType): ICartState => {
  switch (action.type) {
    case ADD_PIZZA_CART: {
      let {order, orderPrice, orderCount} = state
      const {id, price} = action.payload

      const prevItem = order[id]
      const currentItem = prevItem
        ? {
            ...prevItem,
            itemPrice: prevItem.itemPrice + price,
            itemCount: ++prevItem.itemCount,
          }
        : {
            item: action.payload,
            itemCount: 1,
            itemPrice: price,
          }

      return {
        order: {...order, [id]: currentItem},
        orderPrice: roundPrice(orderPrice + price),
        orderCount: ++orderCount,
      }
    }

    case PLUS_PIZZA_CART: {
      let {order, orderPrice, orderCount} = state

      const currentItem = order[action.payload]
      const currentItemPrice = currentItem.item.price

      const newItemPrice = roundPrice(currentItem.itemPrice + currentItemPrice)

      const newItem = {
        ...order,
        [action.payload]: {
          ...order[action.payload],
          itemPrice: newItemPrice,
          itemCount: ++currentItem.itemCount,
        },
      }
      return {
        order: newItem,
        orderPrice: roundPrice(orderPrice + currentItemPrice),
        orderCount: ++orderCount,
      }
    }
    case MINUS_PIZZA_CART: {
      let {order, orderPrice, orderCount} = state
      const currentItem = order[action.payload]

      if (currentItem.itemCount === 1) {
        return state
      }

      const currentItemPrice = currentItem.item.price

      const newItemPrice = roundPrice(currentItem.itemPrice - currentItemPrice)

      const newItem = {
        ...order,
        [action.payload]: {
          ...order[action.payload],
          itemPrice: newItemPrice,
          itemCount: --currentItem.itemCount,
        },
      }
      return {
        order: newItem,
        orderPrice: roundPrice(orderPrice - currentItemPrice),
        orderCount: --orderCount,
      }
    }

    case REMOVE_PIZZA_CART: {
      const {order, orderPrice, orderCount} = state

      const newItems = {...order}

      const currentItemPrice = newItems[action.payload].itemPrice
      const currentItemCount = newItems[action.payload].itemCount

      delete newItems[action.payload]

      return {
        order: newItems,
        orderPrice: roundPrice(orderPrice - currentItemPrice),
        orderCount: orderCount - currentItemCount,
      }
    }
    case CLEAR_CART:
      return {
        order: {},
        orderPrice: 0,
        orderCount: 0,
      }
    default:
      return state
  }
}

export default cart
