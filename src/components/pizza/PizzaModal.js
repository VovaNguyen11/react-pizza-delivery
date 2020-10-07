import React, {useRef, useState, useEffect, memo} from "react"
import {connect} from "react-redux"
import PropTypes from "prop-types"
import {disableBodyScroll, enableBodyScroll} from "body-scroll-lock"
import classNames from "classnames"
import {toast} from "react-toastify"
import {addPizzaCartAction} from "../../redux/actions/cart"

import Button from "../Button"

const availableTypes = ["traditional", "thin"]
const availableSizes = [23, 30, 40]

const PizzaModal = ({
  item: {id, name, types, sizes, price, imageUrl, description},
  addPizzaCartAction,
  history,
}) => {
  const modalRef = useRef()

  const [activeType, setActiveType] = useState(0)
  const [activeSize, setActiveSize] = useState(0)
  const [activePrice, setActivePrice] = useState(0)

  useEffect(() => {
    const modalNode = modalRef.current
    disableBodyScroll(modalNode, {reserveScrollBarGap: true})
    return () => {
      enableBodyScroll(modalNode)
    }
  }, [])

  useEffect(() => {
    if (types && sizes && price) {
      setActiveType(types[0])
      setActiveSize(sizes[0])
      setActivePrice(price[sizes[0]])
    }
  }, [types, sizes, price])

  const closeModal = () => history.goBack()

  const onSelectType = index => () => setActiveType(index)

  const onSelectSize = size => () => {
    setActiveSize(size)
    setActivePrice(price[size])
  }

  const onAddToCart = () => {
    const currentType = availableTypes[activeType]

    const newItem = {
      id: `${id}_${currentType}_${activeSize}`,
      name,
      imageUrl,
      price: price[activeSize],
      size: activeSize,
      type: currentType,
    }
    addPizzaCartAction(newItem)
    history.push("/")
    toast.success("Pizza added to cart 🎉")
  }

  return (
    <div className="modal" ref={modalRef} onClick={closeModal}>
      <div className="modal__container" onClick={e => e.stopPropagation()}>
        <div className="modal__content modal__content-left">
          <img src={imageUrl} alt={`${name} pizza`} />
        </div>
        <div className="modal__content modal__content-right">
          <div>
            <h3>{name}</h3>
            <p>{description}</p>
            <div className="modal__options">
              <ul>
                {availableTypes.map((type, index) => (
                  <li
                    key={type}
                    className={classNames({
                      active: activeType === index,
                      disabled: !types?.includes(index),
                    })}
                    onClick={onSelectType(index)}
                  >
                    {type}
                  </li>
                ))}
              </ul>
              <ul>
                {availableSizes.map(size => (
                  <li
                    key={size}
                    className={classNames({
                      active: activeSize === size,
                      disabled: !sizes?.includes(size),
                    })}
                    onClick={onSelectSize(size)}
                  >
                    {size} cm
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Button onClick={onAddToCart}>Add to Cart for {activePrice}$</Button>
        </div>
        <div className="modal__close">
          <svg
            onClick={closeModal}
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.84606 12.4986L0.552631 3.20519C-0.1806 2.47196 -0.1806 1.28315 0.552631 0.549923C1.28586 -0.183308 2.47466 -0.183308 3.20789 0.549923L12.5013 9.84335L21.792 0.552631C22.5253 -0.1806 23.7141 -0.1806 24.4473 0.552631C25.1805 1.28586 25.1805 2.47466 24.4473 3.20789L15.1566 12.4986L24.45 21.792C25.1832 22.5253 25.1832 23.7141 24.45 24.4473C23.7168 25.1805 22.528 25.1805 21.7947 24.4473L12.5013 15.1539L3.20519 24.45C2.47196 25.1832 1.28315 25.1832 0.549923 24.45C-0.183308 23.7168 -0.183308 22.528 0.549923 21.7947L9.84606 12.4986Z"
              fill="white"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

PizzaModal.propTypes = {
  id: PropTypes.number,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  sizes: PropTypes.arrayOf(PropTypes.number),
  types: PropTypes.arrayOf(PropTypes.number),
  price: PropTypes.objectOf(PropTypes.number),
  description: PropTypes.string,
  addPizzaCartAction: PropTypes.func.isRequired,
}

const mapStateToProps = ({pizzas}, {match}) => {
  const id = match.params.id

  return {
    pizzas: pizzas.items,
    item:
      id && pizzas.items.length
        ? pizzas.items.find(c => c.id === Number(id))
        : {},
  }
}

export default connect(mapStateToProps, {addPizzaCartAction})(memo(PizzaModal))
