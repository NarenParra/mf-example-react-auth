import { initialState } from "./initialState";
export const reducerContainer = (state = initialState, action) => {
  switch (action.type) {
    case "container/login":
      return { login: action.payload.login };

    default:
      return state;
  }
};
