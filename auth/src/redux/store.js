import { createStore } from "redux";
import { nextReducer } from "./reducers/nextReducer";

const store = createStore(
  nextReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
