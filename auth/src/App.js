import React, { useEffect } from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { useSelector } from "react-redux";

const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});

export default ({ history, onSignIn, stateFromAuth }) => {
  const state = useSelector((state) => state);
  useEffect(() => {
    if (stateFromAuth) {
      stateFromAuth(state);
    }
  }, [state]);

  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin">
              <Signin onSignIn={onSignIn} />
            </Route>
            <Route path="/auth/signup">
              <Signup />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
