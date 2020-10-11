import React, {memo} from "react"
import PropTypes from "prop-types"
import {ISortBy, FiltersActionType} from "../types/filters"

import useOutsideClick from "../hooks/useOutsideClick"

const sortingItems = [
  {id: 1, name: "popularity", type: "rating", order: "desc"},
  {id: 2, name: "price", type: "price", order: "asc"},
  {id: 3, name: "alphabet", type: "name", order: "asc"},
]

type SortPopupProps = {
  activeSortBy: ISortBy
  setSortByAction: (sortBy: ISortBy) => FiltersActionType
}

const SortPopup: React.FC<SortPopupProps> = ({
  setSortByAction,
  activeSortBy,
}) => {
  const {ref, isVisible, setIsVisible} = useOutsideClick(false)

  const onPopupClick = () => setIsVisible((isVisible: boolean) => !isVisible)

  const onSortItemClick = (item: ISortBy) => () => {
    setSortByAction(item)
    setIsVisible(false)
  }

  return (
    <div className="sort" ref={ref}>
      <div className="sort__label" onClick={onPopupClick}>
        <svg
          className={isVisible ? "rotated" : ""}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Sort by:</b>
        <span>{activeSortBy.name}</span>
      </div>
      {isVisible && (
        <div className="sort__popup">
          <ul>
            {sortingItems.map(item => (
              <li
                className={activeSortBy.name === item.name ? "active" : ""}
                key={item.id}
                onClick={onSortItemClick(item)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

SortPopup.propTypes = {
  setSortByAction: PropTypes.func.isRequired,
  activeSortBy: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    order: PropTypes.string.isRequired,
  }).isRequired,
}

export default memo(SortPopup)
