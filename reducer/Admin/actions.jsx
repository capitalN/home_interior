import axios from "axios";
import {
  ADD_TO_SHOP,
  DELETE_FROM_SHOP,
  GET_SHOP,
  UPDATE_SHOP,
} from "./actionTypes";

export const get_shop = () => async (dispatch) => {
  let res = await axios.get("http://localhost:8080/data");
  dispatch({ type: GET_SHOP, payload: res.data });
};

export const add_to_shop = (product) => async (dispatch) => {
  try {
    let res = await axios.post("http://localhost:8080/data", product);
    dispatch({ type: ADD_TO_SHOP, payload: res.data });
  } catch (err) {
    // dispatch({ type: ITEM_EXIST });
  }
};

export const update_shop = (product) => async (dispatch) => {
  console.log(product);
  let res = await axios.put(
    `http://localhost:8080/data/${product.id}`,
    product
  );
  dispatch({ type: UPDATE_SHOP, payload: res.data });
};

export const delete_from_shop = (id) => async (dispatch) => {
  let res = await axios.delete(`http://localhost:8080/data/${id}`);
  dispatch({ type: DELETE_FROM_SHOP, payload: id });
};
