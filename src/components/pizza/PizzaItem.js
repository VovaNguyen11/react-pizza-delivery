import React, {memo} from "react"
import PropTypes from "prop-types"
import {Link, useLocation} from "react-router-dom"

import Button from "../Button"

const PizzaItem = ({pizza}) => {
  let location = useLocation()
  const minPrice = pizza.price[pizza.sizes[0]]

  return (
    <div className="pizza">
      <div className="pizza__main">
        <Link
          to={{
            pathname: `/pizzas/${pizza.id}`,
            state: {background: location},
          }}
        >
          <img src={pizza.imageUrl} alt="" className="pizza__preview" />
        </Link>
        <h3 className="pizza__name">{pizza.name}</h3>
        <p className="pizza__desc">{pizza.description}</p>
      </div>
      <div className="pizza__footer">
        <span className="pizza__price">from {minPrice}$</span>
        <Link
          to={{
            pathname: `/pizzas/${pizza.id}`,
            state: {background: location},
          }}
        >
          <Button className="button--add" outline>
            Choose
          </Button>
        </Link>
      </div>
    </div>
  )
}

PizzaItem.propTypes = {
  pizza: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
    types: PropTypes.arrayOf(PropTypes.number).isRequired,
    price: PropTypes.objectOf(PropTypes.number).isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
}

export default memo(PizzaItem)
