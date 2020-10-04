import React from "react"
import ContentLoader from "react-content-loader"

const PizzaPreloader = () => {
  return (
    <ContentLoader
      className="pizza-block"
      speed={1}
      width={250}
      height={460}
      viewBox="0 0 250 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="132" cy="142" r="115" />
      <rect x="0" y="253" rx="6" ry="6" width="250" height="26" />
      <rect x="0" y="300" rx="6" ry="6" width="250" height="84" />
      <rect x="0" y="418" rx="6" ry="6" width="91" height="31" />
      <rect x="140" y="418" rx="25" ry="25" width="110" height="46" />
    </ContentLoader>
  )
}

export default PizzaPreloader
