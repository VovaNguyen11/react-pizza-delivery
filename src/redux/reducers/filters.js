import C from "../types_constants"

const initialState = {
  category: {},
  sortBy: {
    name: "popularity",
    order: "desc",
  },
}

const filters = (state = initialState, {type, payload}) => {
  switch (type) {
    case C.SET_CATEGORY:
      return {...state, category: {...payload}}
    case C.SET_SORT_BY:
      return {...state, sortBy: {...payload}}
    default:
      return state
  }
}

export default filters
