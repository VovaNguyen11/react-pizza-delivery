import {SET_PIZZAS, SET_LOADING} from "../types_constants"
import {IPizzasState, PizzasActionType} from "./../../types/pizzas"

const inittialState: IPizzasState = {
  items: [],
  isLoading: false,
}

const pizzas = (
  state = inittialState,
  action: PizzasActionType
): IPizzasState => {
  switch (action.type) {
    case SET_PIZZAS:
      return {
        items: action.payload,
        isLoading: false,
      }
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      }
    default:
      return state
  }
}

export default pizzas
