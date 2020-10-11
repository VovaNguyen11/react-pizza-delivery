import axios, {AxiosInstance} from "axios"
import {handleResponse, handleError} from "../api.service"
import {ICategory, ISortBy} from "./../../types/filters"

const instance: AxiosInstance = axios.create({
  baseURL: "http://localhost:3001",
})

export const pizzasApi = {
  async getPizzas(activeCat: ICategory | null, sortBy: ISortBy): Promise<any> {
    const queryCategory = activeCat !== null ? `category=${activeCat.id}` : ""
    const querySortBy = `_sort=${sortBy.type}&_order=${sortBy.order}`
    try {
      const res = await instance.get(`/pizzas?${queryCategory}&${querySortBy}`)
      const handleRes = await handleResponse(res)
      return handleRes.data
    } catch (error) {
      return handleError(error)
    }
  },
}
