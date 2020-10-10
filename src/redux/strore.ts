import {createStore, applyMiddleware, compose} from "redux";
import thunk, {ThunkMiddleware} from "redux-thunk";
import {createLogger} from "redux-logger";
import {rootReducer, RootState} from "./reducers";

export const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const logger = createLogger({
  collapsed: true,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk as ThunkMiddleware<RootState>, logger))
);

export default store;
