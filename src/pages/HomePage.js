import React, {useEffect} from "react"
import {connect} from "react-redux"

import {fetchPizzasAction} from "../redux/actions/pizzas"

import CategoriesBar from "../components/CategoriesBar"
import Header from "../components/Header"
import PizzaList from "../components/pizza/PizzaList"
import SortPopup from "../components/SortPopup"

const HomePage = ({activeCat, fetchPizzasAction, pizzas}) => {
  useEffect(() => {
    fetchPizzasAction()
  }, [])

  return (
    <div className="container">
      <Header />
      <main className="content">
        <div className="content__top">
          <CategoriesBar />
          <SortPopup />
        </div>
        <h2 className="content__title">
          {Object.keys(activeCat).length ? activeCat.name : "All"} pizzas
        </h2>
        <div className="content__items">
          <PizzaList pizzas={pizzas} />
        </div>
      </main>
    </div>
  )
}

const mapStateToProps = ({filters, pizzas}) => ({
  activeCat: filters.category,
  pizzas,
})

export default connect(mapStateToProps, {fetchPizzasAction})(HomePage)
