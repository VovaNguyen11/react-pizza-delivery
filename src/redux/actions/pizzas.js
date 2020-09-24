import C from "../types_constants"
import {getPizzas} from "../../services/api/pizzaApi"

export const fetchPizzasAction = () => dispatch =>
  getPizzas()
    .then(data => dispatch({type: C.FETCH_PIZZAS, payload: data.pizzas}))
    .catch(err => {
      throw err
    })
