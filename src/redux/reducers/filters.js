import C from "../types_constants"
const initialState = {
  category: null,
}

const filters = (state = initialState, {type, payload}) => {
  switch (type) {
    case C.SET_CATEGORY:
      return {...state, category: payload}
    default:
      return state
  }
}

export default filters
