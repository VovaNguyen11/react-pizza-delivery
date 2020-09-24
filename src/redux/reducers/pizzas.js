import C from "../types_constants"

const pizzas = (state = [], {type, payload}) => {
  switch (type) {
    case C.FETCH_PIZZAS:
      return [...state, ...payload]
    default:
      return state
  }
}

export default pizzas
