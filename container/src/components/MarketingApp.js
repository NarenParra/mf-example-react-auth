import { mount } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";

export default () => {
  const ref = useRef(null);
  //asignamos la referencias a un div
  //nos aseguramos con el useEfect que se ejecute el codigo una sola vez
  //cuando el componente se muestre por primera vez

  useEffect(() => {
    mount(ref.current);
  });

  return <div ref={ref} />;
};
