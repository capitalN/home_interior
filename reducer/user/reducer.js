import { USER_LOGIN, USER_REGISTER } from "./actionTypes";

let details = {};
if (typeof window !== "undefined") {
  details = JSON.parse(localStorage.getItem("hiUser")) || {};
}

const initialState = {
  details,
  payload: "",
};

export const UserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_REGISTER: {
      return {
        ...state,
        payload,
        details: {
          name: "",
          email: "",
        },
      };
    }
    case USER_LOGIN: {
      return {
        ...state,
        payload,
        details: payload,
      };
    }
    default:
      return state;
  }
};
