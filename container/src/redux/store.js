import { createStore } from "redux";
import { reducerContainer } from "./reducers/reducerContainer";

const store = createStore(
  reducerContainer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
