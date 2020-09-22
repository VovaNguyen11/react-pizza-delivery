import React from "react"
import {connect} from "react-redux"

import CategoriesBar from "../components/CategoriesBar"
import Header from "../components/Header"
import SortPopup from "../components/SortPopup"

const HomePage = ({activeCat}) => {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <div className="content__top">
          <CategoriesBar />
          <SortPopup />
        </div>
        <h2 className="content__title">
          {Object.keys(activeCat).length ? activeCat.name : "All"} pizzas
        </h2>
      </div>
    </div>
  )
}

const mapStateToProps = ({filters}) => ({
  activeCat: filters.category,
})

export default connect(mapStateToProps)(HomePage)
