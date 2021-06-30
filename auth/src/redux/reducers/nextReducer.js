import { initialState } from "./initialState";
export const nextReducer = (state = initialState, action) => {
  switch (action.type) {
    case "auth/login":
      return { email: action.payload.email, password: action.payload.password };

    default:
      return state;
  }
};
