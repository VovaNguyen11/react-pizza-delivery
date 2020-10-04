import C from "../types_constants"

const inittialState = {
  items: [],
  isLoading: false,
}

const pizzas = (state = inittialState, {type, payload}) => {
  switch (type) {
    case C.SET_PIZZAS:
      return {
        ...state,
        items: payload,
      }
    case C.SET_LOADING:
      return {
        ...state,
        isLoading: payload,
      }
    default:
      return state
  }
}

export default pizzas
