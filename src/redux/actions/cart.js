import C from "../types_constants"

export const addPizzaCartAction = pizza => ({
  type: C.ADD_PIZZA_CART,
  payload: pizza,
})
