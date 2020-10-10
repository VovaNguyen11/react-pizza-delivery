import React, {useEffect, memo} from "react"
import {connect} from "react-redux"

import {fetchPizzasAction} from "../redux/actions/pizzas"
import {setCategoryAction, setSortByAction} from "../redux/actions/filters"

import {
  CategoriesBar,
  Header,
  PizzaBlock,
  SortPopup,
  PizzaPreloader,
} from "../components"
import {RootState} from "../redux/reducers"

const HomePage = ({
  pizzas,
  activeCategory,
  activeSortBy,
  fetchPizzasAction,
  setCategoryAction,
  setSortByAction,
  orderCount,
  orderPrice,
  isLoading,
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
        <h2 className="content__title">
          {activeCategory !== null ? activeCategory.name : "All"} pizzas
        </h2>
        <div className="content__items">
          {isLoading
            ? Array(12)
                .fill(0)
                .map((_, index) => <PizzaPreloader key={index} />)
            : pizzas.map(p => <PizzaBlock pizza={p} key={p.id} />)}
        </div>
      </main>
    </div>
  )
}

const mapStateToProps = ({filters, pizzas, cart}) => ({
  activeCategory: filters.category,
  activeSortBy: filters.sortBy,
  pizzas: pizzas.items,
  orderCount: cart.orderCount,
  orderPrice: cart.orderPrice,
  isLoading: pizzas.isLoading,
})

export default connect(mapStateToProps, {
  fetchPizzasAction,
  setCategoryAction,
  setSortByAction,
})(memo(HomePage))
