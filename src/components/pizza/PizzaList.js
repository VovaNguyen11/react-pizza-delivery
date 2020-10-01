import React, {memo} from "react"
import PropTypes from "prop-types"

import PizzaItem from "./PizzaItem"

const PizzaList = ({pizzas}) => {
  return (
    <div className="container container--pizza">
      {pizzas.map(p => (
        <PizzaItem pizza={p} key={p.id} />
      ))}
    </div>
  )
}

PizzaList.propTypes = {
  pizzas: PropTypes.arrayOf(PropTypes.object).isRequired,
}

PizzaList.defaultProps = {
  pizzas: [],
}

export default memo(PizzaList)
