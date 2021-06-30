import React, { useSelector } from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

const mount = (
  el,
  { onSignIn, changeState, onNavigate, defaultHistory, initialPath }
) => {
  const makeStore = () => store;
  makeStore();

  //agregamos un estado inicial para memory
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(
    <Provider store={store}>
      <App onSignIn={onSignIn} history={history} stateFromAuth={changeState} />
    </Provider>,
    el
  );

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;

      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_auth-dev-root");

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };
