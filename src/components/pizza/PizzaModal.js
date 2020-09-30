import React, {useRef, useState, useEffect} from "react"
import {connect} from "react-redux"
import {disableBodyScroll, enableBodyScroll} from "body-scroll-lock"
import classNames from "classnames"

import {addPizzaCartAction} from "../../redux/actions/cart"

import Button from "../Button"
import closeIcon from "../../assets/img/close.svg"

const availableTypes = ["traditional", "thin"]
const availableSizes = [23, 30, 40]

const PizzaModal = ({pizzas, item, addPizzaCartAction, history}) => {
  const modalRef = useRef()

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
    if (pizzas.length) {
      setActiveType(item.types[0])
      setActiveSize(item.sizes[0])
    }
  }, [pizzas, item])

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
          <Button onClick={onAddToCart}>
            Add to Cart for {item.price[activeSize]}$
          </Button>
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

const mapStateToProps = ({pizzas}, ownProps) => {
  const id = ownProps.match.params.id

  return {
    pizzas,
    item: id && pizzas.length ? pizzas.find(c => c.id === Number(id)) : {},
  }
}

export default connect(mapStateToProps, {addPizzaCartAction})(PizzaModal)
