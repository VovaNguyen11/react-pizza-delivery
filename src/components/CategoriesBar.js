import React, {memo} from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import Button from "./Button"

const categories = [
  {id: 1, name: "Meat"},
  {id: 2, name: "Grill"},
  {id: 3, name: "Spicy"},
  {id: 4, name: "Vegeterian"},
]

const CategoriesBar = ({activeCategory, setCategoryAction}) => {
  const onCategoryClick = category => () =>
    category !== null ? setCategoryAction(category) : setCategoryAction(null)

  return (
    <div className="categories">
      <ul className="categories__list">
        <li className="categories__item">
          <Button
            className={classNames("button--category", {
              active: activeCategory === null,
            })}
            onClick={onCategoryClick(null)}
          >
            All
          </Button>
        </li>
        {categories.map(c => (
          <li className="categories__item" key={c.id}>
            <Button
              className={classNames("button--category", {
                active: activeCategory?.id === c.id,
              })}
              onClick={onCategoryClick(c)}
            >
              {c.name}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

CategoriesBar.propTypes = {
  activeCategory: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }),
  setCategoryAction: PropTypes.func.isRequired,
}

export default memo(CategoriesBar)
