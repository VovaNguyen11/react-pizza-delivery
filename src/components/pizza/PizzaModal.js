import React, {useRef, useState, useEffect, memo} from "react"
import {connect} from "react-redux"
import PropTypes from "prop-types"
import {disableBodyScroll, enableBodyScroll} from "body-scroll-lock"
import classNames from "classnames"

import {addPizzaCartAction} from "../../redux/actions/cart"

import Button from "../Button"
import closeIcon from "../../assets/img/close.svg"

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
    if (types && sizes) {
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
        <img
          src={closeIcon}
          alt="close icon"
          className="modal__close"
          onClick={closeModal}
        />
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
    pizzas,
    item: id && pizzas.length ? pizzas.find(c => c.id === Number(id)) : {},
  }
}

export default connect(mapStateToProps, {addPizzaCartAction})(memo(PizzaModal))
