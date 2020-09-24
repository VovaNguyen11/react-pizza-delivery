import C from "../types_constants"

const pizzas = (state = [], {type, payload}) => {
  switch (type) {
    case C.SET_PIZZAS:
      return [...payload]
    default:
      return state
  }
}

export default pizzas
