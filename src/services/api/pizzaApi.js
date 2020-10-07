import {handleResponse, handleError} from "../api.service"
import axios from "axios"

export const getPizzas = (activeCat, sortBy) => {
  const queryCategory = activeCat !== null ? `category=${activeCat.id}` : ""
  const querySortBy = `_sort=${sortBy.type}&_order=${sortBy.order}`

  return axios
    .get(`http://localhost:3001/pizzas?${queryCategory}&${querySortBy}`)
    .then(handleResponse)
    .catch(handleError)
}
