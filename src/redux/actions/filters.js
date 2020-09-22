import C from "../types_constants"

export const setActiveCategory = id => ({
  type: C.SET_CATEGORY,
  payload: id,
})
