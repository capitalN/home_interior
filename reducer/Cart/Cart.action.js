import { baseURL } from "@/base";
import axios from "axios";
import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  ERROR_CART,
  GET_CART,
  ITEM_EXIST,
  LOADING_CART,
  UPDATE_CART,
} from "./Cart.actionTypes";

export const get_cart = () => async (dispatch) => {
  dispatch({ type: LOADING_CART });
  const email = localStorage.getItem("hiUser");
  try {
    let res = await axios({
      method: "GET",
      baseURL,
      url: `cart?email=${email}`,
    });
    dispatch({ type: GET_CART, payload: res.data });
  } catch (error) {
    dispatch({ type: ERROR_CART });
  }
};

export const add_to_cart = (data) => async (dispatch) => {
  dispatch({ type: LOADING_CART });
  const email = localStorage.getItem("hiUser");
  try {
    let res = await axios({
      method: "POST",
      baseURL,
      url: `cart`,
      data: { ...data, id: email + data.id + data.category, email },
    });
    if (!email) {
      alert("WARNING, please login first");
      return;
    }
    alert("SUCCESS, product added");
    dispatch({ type: ADD_TO_CART, payload: res.data });
  } catch (err) {
    console.log(err);
    alert("WARNING, product is in cart already");
  }
};

export const update_cart =
  ({ id, a }) =>
  async (dispatch) => {
    dispatch({ type: LOADING_CART });
    try {
      let res = await axios({
        method: "patch",
        baseURL,
        url: `cart/${id}`,
        data: { count: a },
      });
      dispatch({ type: ADD_TO_CART, payload: res.data });
    } catch (err) {
      console.log(err);
    }
  };

export const delete_from_cart = (id) => async (dispatch) => {
  dispatch({ type: LOADING_CART });
  try {
    let res = await axios({
      method: "DELETE",
      baseURL,
      url: `cart/${id}`,
    });
    dispatch({ type: DELETE_FROM_CART, payload: id });
  } catch (e) {
    dispatch({ type: ERROR_CART });
  }
};
