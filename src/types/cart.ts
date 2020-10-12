import {
  ADD_PIZZA_CART,
  REMOVE_PIZZA_CART,
  PLUS_PIZZA_CART,
  MINUS_PIZZA_CART,
  CLEAR_CART,
} from "../redux/types_constants"

export interface IPizzaCart {
  id: string
  imageUrl: string
  name: string
  price: number
  size: number
  type: string
}

export interface ICartItems {
  [key: string]: {
    item: IPizzaCart
    itemPrice: number
    itemCount: number
  }
}

export interface ICartState {
  order: ICartItems
  orderPrice: number
  orderCount: number
}

interface IAddPizzaCartAction {
  type: typeof ADD_PIZZA_CART
  payload: IPizzaCart
}

interface IRemovePizzaCartAction {
  type: typeof REMOVE_PIZZA_CART
  payload: string
}

interface IPlusPizzaCartAction {
  type: typeof PLUS_PIZZA_CART
  payload: string
}

interface IMinusPizzaCartAction {
  type: typeof MINUS_PIZZA_CART
  payload: string
}

interface IClearCartAction {
  type: typeof CLEAR_CART
}

export type CartActionType =
  | IAddPizzaCartAction
  | IRemovePizzaCartAction
  | IPlusPizzaCartAction
  | IMinusPizzaCartAction
  | IClearCartAction
