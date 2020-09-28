import C from "../types_constants"

const initState = {
  items: [],
  orderSum: 0,
}

const cart = (state = initState, {type, payload}) => {
  switch (type) {
    case C.ADD_PIZZA_CART:
      const {items, orderSum} = state
      const sum = orderSum + payload.price
      return {
        items: [...items, payload],
        orderSum: Math.floor(sum * 100) / 100,
      }
    case C.REMOVE_PIZZA_CART:
      return {
        ...state,
        items: state.items.filter(i => i.id !== payload),
      }
    case C.CLEAR_CART:
      return {
        items: [],
        orderSum: 0,
      }
    default:
      return state
  }
}

export default cart
