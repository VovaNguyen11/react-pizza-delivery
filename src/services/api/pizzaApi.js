import {handleResponse, handleError} from "../api.service"
import axios from "axios"

export const getPizzas = activeCat =>
  axios
    .get(
      `http://localhost:3001/pizzas?${
        Object.keys(activeCat).length ? `category=${activeCat.id}` : ""
      }`
    )
    .then(handleResponse)
    .catch(handleError)
