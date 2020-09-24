import {handleResponse, handleError} from "../api.service"
import axios from "axios"

export const getPizzas = () =>
  axios
    .get("http://localhost:3000/db.json")
    .then(handleResponse)
    .catch(handleError)
