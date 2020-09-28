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
