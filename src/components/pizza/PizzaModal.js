import React, {useRef, useEffect} from "react"
import {connect} from "react-redux"
import {useHistory, useParams} from "react-router-dom"
import {disableBodyScroll, enableBodyScroll} from "body-scroll-lock"

import {addPizzaCartAction} from "../../redux/actions/cart"

import Button from "../Button"

const PizzaModal = ({pizzas, addPizzaCartAction}) => {
  const modalRef = useRef()
  const history = useHistory()
  const {id} = useParams()
  let item = pizzas.find(p => p.id === Number(id))
  if (!item) item = {}

  useEffect(() => {
    const modalNode = modalRef.current
    disableBodyScroll(modalNode, {reserveScrollBarGap: true})
    return () => {
      enableBodyScroll(modalNode)
    }
  }, [])

  const closeModal = e => {
    history.goBack()
  }

  const onAddToCart = e => {
    addPizzaCartAction(item)
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
          </div>
          <Button onClick={onAddToCart}>Add to Cart for {item.price}$</Button>
        </div>
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={closeModal}
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
  )
}

const mapStateToProps = ({pizzas}) => ({
  pizzas,
})

export default connect(mapStateToProps, {addPizzaCartAction})(PizzaModal)
