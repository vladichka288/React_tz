import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import createSagaMiddleware from "redux-saga";
import  GroceryListReducer from "./store/reducers/groceryListReducer"
import {watchGroceryList} from "./store/sagas/index"
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
const rootReducer = combineReducers({
  GroceryList: GroceryListReducer,
});
/*const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;*/
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(watchGroceryList);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
