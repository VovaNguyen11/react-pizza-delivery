import C from "../types_constants"

export const setCategoryAction = category => ({
  type: C.SET_CATEGORY,
  payload: category,
})

export const setSortByAction = sortItem => ({
  type: C.SET_SORT_BY,
  payload: sortItem,
})
