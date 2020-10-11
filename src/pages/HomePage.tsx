import React, {useEffect, memo} from "react"
import {connect, ConnectedProps} from "react-redux"
import {RootState} from "../redux/reducers"

import {fetchPizzasAction} from "../redux/actions/pizzas"
import {setCategoryAction, setSortByAction} from "../redux/actions/filters"

import {
  CategoriesBar,
  Header,
  PizzaBlock,
  SortPopup,
  PizzaPreloader,
} from "../components"
import {IPizza} from "../types/pizzas"

type HomePageProps = PropsFromRedux

const HomePage = ({
  pizzas,
  activeSortBy,
  activeCategory,
  orderCount,
  orderPrice,
  isLoading,
  fetchPizzasAction,
  setCategoryAction,
  setSortByAction,
}: HomePageProps) => {
  useEffect(() => {
    fetchPizzasAction(activeSortBy, activeCategory)
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
            : pizzas.map((p: IPizza) => <PizzaBlock pizza={p} key={p.id} />)}
        </div>
      </main>
    </div>
  )
}

const mapStateToProps = ({filters, pizzas, cart}: RootState) => ({
  activeCategory: filters.category,
  activeSortBy: filters.sortBy,
  pizzas: pizzas.items,
  orderCount: cart.orderCount,
  orderPrice: cart.orderPrice,
  isLoading: pizzas.isLoading,
})

const mapDispatchToProps = {
  fetchPizzasAction,
  setCategoryAction,
  setSortByAction,
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(memo(HomePage))
