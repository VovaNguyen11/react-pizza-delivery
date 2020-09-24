import React, {useEffect, useState} from "react"
import {Route} from "react-router-dom"
import PizzaItem from "./PizzaItem"
import PizzaModal from "./PizzaModal"

const PizzaList = ({pizzas}) => {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden"
      document.body.style.paddingRight = "15px"
    }
    return () => {
      document.body.style.overflow = "auto"
      document.body.style.paddingRight = "0"
    }
  }, [showModal])

  return (
    <div className="container container--pizza">
      {pizzas.map(p => (
        <PizzaItem pizza={p} key={p.id} />
      ))}
    </div>
  )
}

export default PizzaList
