import React, {useRef, useState, useEffect} from "react"
import {connect} from "react-redux"
import {useHistory, useParams} from "react-router-dom"
import {disableBodyScroll, enableBodyScroll} from "body-scroll-lock"
import classNames from "classnames"

import {addPizzaCartAction} from "../../redux/actions/cart"

import Button from "../Button"
import closeIcon from "../../assets/img/close.svg"

const availableTypes = ["traditional", "thin"]
const availableSizes = [23, 30, 40]

const PizzaModal = ({pizzas, addPizzaCartAction}) => {
  const modalRef = useRef()
  const history = useHistory()
  const {id} = useParams()

  let item = pizzas.find(p => p.id === Number(id))
  if (!item) item = {}

  const [activeType, setActiveType] = useState(0)
  const [activeSize, setActiveSize] = useState(0)

  useEffect(() => {
    const modalNode = modalRef.current
    disableBodyScroll(modalNode, {reserveScrollBarGap: true})
    return () => {
      enableBodyScroll(modalNode)
    }
  }, [])

  useEffect(() => {
    if (Object.keys(item).length) {
      setActiveType(item.types[0])
      setActiveSize(item.sizes[0])
    }
  }, [item])

  const closeModal = () => {
    history.goBack()
  }

  const onSelectType = index => () => {
    setActiveType(index)
  }
  const onSelectSize = size => () => {
    setActiveSize(size)
  }

  const onAddToCart = () => {
    const {id, name, imageUrl, price} = item

    const newItem = {
      id,
      name,
      imageUrl,
      price,
      size: activeSize,
      type: availableTypes[activeType],
    }
    addPizzaCartAction(newItem)
    history.push("/")
  }

  return (
    <div className="modal" ref={modalRef} onClick={closeModal}>
      <div className="modal__container" onClick={e => e.stopPropagation()}>
        <div className="modal__content modal__content-left">
          <img src={item.imageUrl} alt={`${item.name} pizza`} />
        </div>
        <div className="modal__content modal__content-right">
          <div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <div className="modal__options">
              <ul>
                {availableTypes.map((type, index) => (
                  <li
                    key={type}
                    className={classNames({
                      active: activeType === index,
                      disabled:
                        Object.keys(item).length && !item.types.includes(index),
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
                      disabled:
                        Object.keys(item).length && !item.sizes.includes(size),
                    })}
                    onClick={onSelectSize(size)}
                  >
                    {size} cm
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Button onClick={onAddToCart}>Add to Cart for {item.price}$</Button>
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

const mapStateToProps = ({pizzas}) => ({
  pizzas,
})

export default connect(mapStateToProps, {addPizzaCartAction})(PizzaModal)
