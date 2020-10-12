import {SET_PIZZAS, SET_LOADING} from "../redux/types_constants"

export interface IPizza {
  id: number
  imageUrl: string
  name: string
  description: string
  types: Array<number>
  sizes: Array<number>
  price: {
    [key: string]: number
  }
  category: number
  rating: number
}

export interface IPizzasState {
  items: IPizza[]
  isLoading: boolean
}

interface ISetPizzaAction {
  type: typeof SET_PIZZAS
  payload: Array<IPizza>
}

interface ISetLoadingAction {
  type: typeof SET_LOADING
  payload: boolean
}

export type PizzasActionType = ISetPizzaAction | ISetLoadingAction
