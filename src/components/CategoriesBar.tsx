import React, {memo} from "react"
import classNames from "classnames"
import {ICategory, FiltersActionType} from "../types/filters"

import Button from "./Button"

const categories = [
  {id: 1, name: "Meat"},
  {id: 2, name: "Grill"},
  {id: 3, name: "Spicy"},
  {id: 4, name: "Vegeterian"},
]

type CategoriesBarProps = {
  activeCategory: ICategory | null
  setCategoryAction: (category: ICategory | null) => FiltersActionType
}

const CategoriesBar: React.FC<CategoriesBarProps> = ({
  activeCategory,
  setCategoryAction,
}) => {
  const onCategoryClick = (category: ICategory | null) => () =>
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

export default memo(CategoriesBar)
