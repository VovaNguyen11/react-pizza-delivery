import {RootState} from "./../reducers"
import {ThunkAction} from "redux-thunk"
import {Action, Dispatch} from "redux"
import {SET_LOADING, SET_PIZZAS} from "../types_constants"
import {pizzasApi} from "../../services/api/pizzaApi"
import {IPizza} from "./../../types/pizzas"
import {ICategory, ISortBy} from "../../types/filters"

type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

const setPizzas = (data: IPizza[]) => ({type: SET_PIZZAS, payload: data})

const setLoading = (payload: boolean) => ({type: SET_LOADING, payload})

export const fetchPizzasAction = (
  sortBy: ISortBy,
  activeCat: ICategory | null
): AppThunk => (dispatch: Dispatch) => {
  dispatch(setLoading(true))
  pizzasApi
    .getPizzas(activeCat, sortBy)
    .then(data => dispatch(setPizzas(data)))
    .catch(err => {
      throw err
    })
}
