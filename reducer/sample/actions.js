import axios from "axios";
import { GET_CART } from "./actionTypes";

export const getCart = () => async (dispatch) => {
  let res = await axios.get(``);
  dispatch({ type: GET_CART, payload: res.data });
};

// export const getCart = () => async (dispatch) => {
//   dispatch({ type: GET_CART_LOADING });
//   try {
//     let res = await axios.get(``);
//     dispatch({ type: GET_CART_SUCCESS, payload: res.data });
//   } catch (err) {
//     dispatch({ type: GET_CART_ERROR, payload: err });
//   }
// };
