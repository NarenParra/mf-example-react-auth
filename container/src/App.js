import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import MarketingApp from "./components/MarketingApp";
import AuthApp from "./components/AuthApp";
import Header from "./components/Header";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

//import { MarketingReactComponent } from "marketing/MarketingApp";

//se puede utilizar directamente los componentes de react de Marketing
//porque tanto el contenedor como el mf estan construidas con react
//pero el objetivo es tener bajo acoplamiento
//y que el child pueda estar escrito en cualquier framework

export default () => {
  // return <MarketingReactComponent />;
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <Switch>
            <Route path="/auth" component={AuthApp} />
            <Route path="/" component={MarketingApp} />
          </Switch>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
