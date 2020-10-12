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
      <circle cx="125" cy="135" r="105" />
      <rect x="0" y="260" rx="6" ry="6" width="250" height="26" />
      <rect x="0" y="300" rx="6" ry="6" width="250" height="84" />
      <rect x="0" y="415" rx="6" ry="6" width="91" height="31" />
      <rect x="140" y="407" rx="25" ry="25" width="110" height="46" />
    </ContentLoader>
  )
}

export default PizzaPreloader
