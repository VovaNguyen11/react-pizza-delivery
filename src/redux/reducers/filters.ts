import {SET_SORT_BY, SET_CATEGORY} from "../types_constants"
import {IFiltersState, FiltersActionType} from "../../types/filters"

const initialState: IFiltersState = {
  category: null,
  sortBy: {
    name: "popularity",
    type: "rating",
    order: "desc",
  },
}

const filters = (
  state = initialState,
  action: FiltersActionType
): IFiltersState => {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      }
    case SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      }
    default:
      return state
  }
}

export default filters
