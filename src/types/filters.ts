import {SET_SORT_BY, SET_CATEGORY} from "../redux/types_constants"

export interface ICategory {
  id: number
  name: string
}

export interface ISortBy {
  name: string
  type: string
  order: string
}

export interface IFiltersState {
  category: ICategory | null
  sortBy: ISortBy
}

interface ISetCategoryAction {
  type: typeof SET_CATEGORY
  payload: ICategory | null
}

interface ISetSortByAction {
  type: typeof SET_SORT_BY
  payload: ISortBy
}

export type FiltersActionType = ISetCategoryAction | ISetSortByAction
