import { USER_LOGIN, USER_REGISTER } from "./actionTypes";

let token = null;
if (typeof window !== "undefined") {
  token = localStorage.getItem("token") || null;
}

const initialState = {
  token,
  payload: "",
};

export const UserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_REGISTER: {
      return {
        ...state,
        payload,
      };
    }
    case USER_LOGIN: {
      // window.location.reload()
      return {
        ...state,
        payload,
        token:payload.token
      };
    }
    default:
      return state;
  }
};
