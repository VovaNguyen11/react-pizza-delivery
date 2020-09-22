import C from "../types_constants"

export const setActiveCategory = category => ({
  type: C.SET_CATEGORY,
  payload: category,
})

export const setSortBy = sortItem => ({
  type: C.SET_SORT_BY,
  payload: sortItem,
})
