import C from "../types_constants"
import {getPizzas} from "../../services/api/pizzaApi"

const setPizzas = data => ({type: C.SET_PIZZAS, payload: data})

const setLoading = payload => ({type: C.SET_LOADING, payload})

export const fetchPizzasAction = (activeCat, sortBy) => dispatch => {
  dispatch(setLoading(true))
  getPizzas(activeCat, sortBy)
    .then(data => dispatch(setPizzas(data)))
    .catch(err => {
      throw err
    })
}
