import React, {useEffect} from "react"
import {connect} from "react-redux"

import {fetchPizzasAction} from "../redux/actions/pizzas"
import {setCategoryAction, setSortByAction} from "../redux/actions/filters"

import CategoriesBar from "../components/CategoriesBar"
import Header from "../components/Header"
import PizzaList from "../components/pizza/PizzaList"
import SortPopup from "../components/SortPopup"

const HomePage = ({
  pizzas,
  activeCategory,
  activeSortBy,
  fetchPizzasAction,
  setCategoryAction,
  setSortByAction,
  orderCount,
  orderPrice,
}) => {
  useEffect(() => {
    fetchPizzasAction(activeCategory, activeSortBy)
  }, [activeCategory, activeSortBy, fetchPizzasAction])

  return (
    <div className="container">
      <Header orderCount={orderCount} orderPrice={orderPrice} />
      <main className="content">
        <div className="content__top">
          <CategoriesBar
            activeCategory={activeCategory}
            setCategoryAction={setCategoryAction}
          />
          <SortPopup
            activeSortBy={activeSortBy}
            setSortByAction={setSortByAction}
          />
        </div>
        <div className="content__items">
          <h2 className="content__title">
            {activeCategory !== null ? activeCategory.name : "All"} pizzas
          </h2>
          <PizzaList pizzas={pizzas} />
        </div>
      </main>
    </div>
  )
}

const mapStateToProps = ({filters, pizzas, cart}) => ({
  activeCategory: filters.category,
  activeSortBy: filters.sortBy,
  pizzas,
  orderCount: cart.orderCount,
  orderPrice: cart.orderPrice,
})

export default connect(mapStateToProps, {
  fetchPizzasAction,
  setCategoryAction,
  setSortByAction,
})(HomePage)
