import React, {useEffect} from "react"
import {connect} from "react-redux"
import PropTypes from "prop-types"

import {fetchPizzasAction} from "../redux/actions/pizzas"
import {setCategoryAction, setSortByAction} from "../redux/actions/filters"

import CategoriesBar from "../components/CategoriesBar"
import Header from "../components/Header"
import PizzaBlock from "../components/pizza/PizzaBlock"
import SortPopup from "../components/SortPopup"
import PizzaPreloader from "../components/pizza/PizzaPreloader"
import {memo} from "react"

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
      {console.log(isLoading)}
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

HomePage.propTypes = {
  pizzas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      imageUrl: PropTypes.string,
      name: PropTypes.string,
      sizes: PropTypes.arrayOf(PropTypes.number),
      types: PropTypes.arrayOf(PropTypes.number),
      price: PropTypes.objectOf(PropTypes.number),
      description: PropTypes.string,
    })
  ).isRequired,
  activeCategory: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }),
  activeSortBy: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    order: PropTypes.string.isRequired,
  }).isRequired,
  orderCount: PropTypes.number.isRequired,
  orderPrice: PropTypes.number.isRequired,
  fetchPizzasAction: PropTypes.func.isRequired,
  setCategoryAction: PropTypes.func.isRequired,
  setSortByAction: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
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
