import React from "react"
import {connect} from "react-redux"
import classNames from "classnames"

import Button from "./Button"

import {setActiveCategory} from "../redux/actions/filters"

const categories = [
  {id: 1, name: "Meat"},
  {id: 2, name: "Vegeterian"},
  {id: 3, name: "Grill"},
  {id: 4, name: "Hot"},
]

const CategoriesBar = ({activeCat, setActiveCategory}) => {
  return (
    <div className="categories">
      <ul className="categories__list">
        <li className="categories__item">
          <Button
            className={classNames("button--black", {
              active: !activeCat,
            })}
            onClick={() => setActiveCategory(null)}
          >
            All
          </Button>
        </li>
        {categories.map(c => (
          <li className="categories__item" key={c.id}>
            <Button
              className={classNames("button--black", {
                active: activeCat === c.id,
              })}
              onClick={() => setActiveCategory(c.id)}
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
