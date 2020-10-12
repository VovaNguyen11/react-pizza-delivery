import {IPizzaCart} from "./../../types/cart"
import {
  ADD_PIZZA_CART,
  REMOVE_PIZZA_CART,
  PLUS_PIZZA_CART,
  MINUS_PIZZA_CART,
  CLEAR_CART,
} from "../types_constants"

export const addPizzaCartAction = (pizza: IPizzaCart) => ({
  type: ADD_PIZZA_CART,
  payload: pizza,
})

export const removePizzaCartAction = (id: string) => ({
  type: REMOVE_PIZZA_CART,
  payload: id,
})

export const plusPizzaCartAction = (id: string) => ({
  type: PLUS_PIZZA_CART,
  payload: id,
})

export const minusPizzaCartAction = (id: string) => ({
  type: MINUS_PIZZA_CART,
  payload: id,
})

export const clearCartAction = () => ({
  type: CLEAR_CART,
})
