import {createStore, applyMiddleware, compose} from "redux"
import thunk from "redux-thunk"
import {createLogger} from "redux-logger"
import rootReducer from "./reducers"
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const logger = createLogger({
  collapsed: true,
})
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
)

window.store = store

export default store
