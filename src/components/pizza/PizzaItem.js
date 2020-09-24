import React from "react"
import Button from "../Button"

const PizzaItem = ({pizza}) => {
  return (
    <div className="pizza">
      <div className="pizza__main">
        <img src={pizza.imageUrl} alt="" className="pizza__preview" />
        <h3 className="pizza__name">{pizza.name}</h3>
        <p className="pizza__desc">{pizza.description}</p>
      </div>
      <div className="pizza__footer">
        <span className="pizza__price">from {pizza.price}$</span>
        <Button>Choose</Button>
      </div>
    </div>
  )
}

export default PizzaItem
