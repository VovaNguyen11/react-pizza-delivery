import React from "react"
import {connect} from "react-redux"
import classNames from "classnames"

import Button from "./Button"

import {setActiveCategory} from "../redux/actions/filters"

const categories = [
  {id: 1, name: "Meat"},
  {id: 2, name: "Grill"},
  {id: 3, name: "Spicy"},
  {id: 4, name: "Vegeterian"},
]

const CategoriesBar = ({activeCat, setActiveCategory}) => {
  return (
    <div className="categories">
      <ul className="categories__list">
        <li className="categories__item">
          <Button
            className={classNames("button--black", {
              active: Object.keys(activeCat).length === 0,
            })}
            onClick={() => setActiveCategory({})}
          >
            All
          </Button>
        </li>
        {categories.map(c => (
          <li className="categories__item" key={c.id}>
            <Button
              className={classNames("button--black", {
                active: activeCat && activeCat.id === c.id,
              })}
              onClick={() => setActiveCategory(c)}
            >
              {c.name}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

const mapStateToProps = ({filters}) => ({
  activeCat: filters.category,
})

export default connect(mapStateToProps, {setActiveCategory})(CategoriesBar)
