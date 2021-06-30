import { mount } from "auth/AuthApp";
import React, { useRef, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export default ({ onSignIn }) => {
  const ref = useRef(null);
  const history = useHistory();
  const [stateAuth, setStateAuth] = useState({});

  const changeState = (state) => {
    setStateAuth(state);
  };

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;

        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      onSignIn,
      changeState,
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
