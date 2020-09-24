import C from "../types_constants"
import {getPizzas} from "../../services/api/pizzaApi"

export const setPizzas = data => ({type: C.SET_PIZZAS, payload: data})

export const fetchPizzasAction = activeCat => dispatch =>
  getPizzas(activeCat)
    .then(data => dispatch(setPizzas(data)))
    .catch(err => {
      throw err
    })
