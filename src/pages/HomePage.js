import React from "react"

import CategoriesBar from "../components/CategoriesBar"
import Header from "../components/Header"
import SortPopup from "../components/SortPopup"

const HomePage = () => {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <div className="content__top">
          <CategoriesBar />
          <SortPopup />
        </div>
        <h2 className="content__title">Все пиццы</h2>
      </div>
    </div>
  )
}

export default HomePage
