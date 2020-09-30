import C from "../types_constants"

const initState = {
  order: {},
  orderPrice: 0,
  orderCount: 0,
}

// const getItemPrice = (item, amount) => (item ? item.itemPrice + amount : amount)
const roundPrice = price => Math.round(price * 100) / 100

const cart = (state = initState, {type, payload}) => {
  switch (type) {
    case C.ADD_PIZZA_CART: {
      let {order, orderPrice, orderCount} = state
      const {id, price} = payload

      const prevItem = order[id]
      const currentItem = prevItem
        ? {
            ...prevItem,
            itemPrice: prevItem.itemPrice + price,
            itemCount: ++prevItem.itemCount,
          }
        : {
            item: payload,
            itemCount: 1,
            itemPrice: price,
          }

      return {
        order: {...order, [id]: currentItem},
        orderPrice: roundPrice(orderPrice + price),
        orderCount: ++orderCount,
      }
    }

    case C.PLUS_PIZZA_CART: {
      let {order, orderPrice, orderCount} = state

      const currentItem = order[payload]
      const currentItemPrice = currentItem.item.price

      const newItemPrice = roundPrice(currentItem.itemPrice + currentItemPrice)

      const newItem = {
        ...order,
        [payload]: {
          ...order[payload],
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
    case C.MINUS_PIZZA_CART: {
      let {order, orderPrice, orderCount} = state
      const currentItem = order[payload]
      if (currentItem.itemCount === 1) {
        return state
      }
      const currentItemPrice = currentItem.item.price

      const newItemPrice = roundPrice(currentItem.itemPrice - currentItemPrice)

      const newItem = {
        ...order,
        [payload]: {
          ...order[payload],
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

    case C.REMOVE_PIZZA_CART: {
      const {order, orderPrice, orderCount} = state

      const newItems = {...order}

      const currentItemPrice = newItems[payload].itemPrice
      const currentItemCount = newItems[payload].itemCount

      delete newItems[payload]

      return {
        order: newItems,
        orderPrice: roundPrice(orderPrice - currentItemPrice),
        orderCount: orderCount - currentItemCount,
      }
    }

    case C.CLEAR_CART:
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
