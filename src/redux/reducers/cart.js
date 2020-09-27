import C from "../types_constants"

const initState = {
  items: [
    {
      id: 0,
      imageUrl:
        "https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/d2e337e9-e07a-4199-9cc1-501cc44cb8f8.jpg",
      name: "Pepperoni",
      description:
        "Savory pepperoni, large portion of mozzarella, tomato sauce",
      types: [0, 1],
      sizes: [26],
      price: 9.99,
      category: 1,
      rating: 14,
    },
    {
      id: 1,
      imageUrl:
        "https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/d2e337e9-e07a-4199-9cc1-501cc44cb8f8.jpg",
      name: "Pepperoni",
      description:
        "Savory pepperoni, large portion of mozzarella, tomato sauce",
      types: [0, 1],
      sizes: [26],
      price: 9.99,
      category: 1,
      rating: 14,
    },
    {
      id: 3,
      imageUrl:
        "https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/d2e337e9-e07a-4199-9cc1-501cc44cb8f8.jpg",
      name: "Pepperoni",
      description:
        "Savory pepperoni, large portion of mozzarella, tomato sauce",
      types: [0, 1],
      sizes: [26],
      price: 9.99,
      category: 1,
      rating: 14,
    },
  ],
  orderSum: 0,
}

const cart = (state = initState, {type, payload}) => {
  switch (type) {
    case C.ADD_PIZZA_CART:
      const {items, orderSum} = state
      const sum = orderSum + payload.price
      return {
        items: [...items, payload],
        orderSum: Math.floor(sum * 100) / 100,
      }
    default:
      return state
  }
}

export default cart
