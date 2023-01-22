import axios from "axios";
import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  GET_CART,
  ITEM_EXIST,
  UPDATE_CART,
} from "./Cart.actionTypes";

export const get_cart = () => async (dispatch) => {
  let res = await axios.get("https://home-interior.onrender.com/cart");
  dispatch({ type: GET_CART, payload: res.data });
};

export const add_to_cart = (product) => async (dispatch) => {
  try {
    let res = await axios.post(
      "https://home-interior.onrender.com/cart",
      product
    );
    dispatch({ type: ADD_TO_CART, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

export const update_cart =
  ({ id, a }) =>
  async (dispatch) => {
    let res = await axios.patch(
      `https://home-interior.onrender.com/cart/${id}`,
      { count: a }
    );
    dispatch({ type: UPDATE_CART, payload: res.data });
  };

export const delete_from_cart = (id) => async (dispatch) => {
  let res = await axios.delete(`https://home-interior.onrender.com/cart/${id}`);
  dispatch({ type: DELETE_FROM_CART, payload: id });
};
