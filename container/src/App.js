import React from "react";
import { BrowserRouter } from "react-router-dom";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
//import { MarketingReactComponent } from "marketing/MarketingApp";

//se puede utilizar directamente los componentes de react de Marketing
//porque tanto el contenedor como el mf estan construidas con react
//pero el objetivo es tener bajo acoplamiento
//y que el child pueda estar escrito en cualquier framework

export default () => {
  // return <MarketingReactComponent />;
  return (
    <>
      <BrowserRouter>
        <Header />
        <MarketingApp />
      </BrowserRouter>
    </>
  );
};
