import React, {memo} from "react"

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

PizzaList.defaultProps = {
  pizzas: [],
}

export default memo(PizzaList)
