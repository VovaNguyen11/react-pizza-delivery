import {SET_CATEGORY, SET_SORT_BY} from "../types_constants"
import {ICategory, ISortBy, FiltersActionType} from "../../types/filters"

export const setCategoryAction = (
  category: ICategory | null
): FiltersActionType => ({
  type: SET_CATEGORY,
  payload: category,
})

export const setSortByAction = (sortItem: ISortBy): FiltersActionType => ({
  type: SET_SORT_BY,
  payload: sortItem,
})
