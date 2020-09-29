import C from "../types_constants"

export const addPizzaCartAction = pizza => ({
  type: C.ADD_PIZZA_CART,
  payload: pizza,
})

export const removePizzaCartAction = id => ({
  type: C.REMOVE_PIZZA_CART,
  payload: id,
})

export const clearCartAction = () => ({
  type: C.CLEAR_CART,
})

export const plusPizzaCartAction = id => ({
  type: C.PLUS_PIZZA_CART,
  payload: id,
})

export const minusPizzaCartAction = id => ({
  type: C.MINUS_PIZZA_CART,
  payload: id,
})
