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
  dispatch({type:LOADING_CART})
  try{
    let res = await axios.get("https://home-interior.onrender.com/cart");
    dispatch({ type: GET_CART, payload: res.data });
  }
  catch(e){
    dispatch({type:ERROR_CART})
  }
  
};

export const add_to_cart = (product) => async (dispatch) => {
  dispatch({type:LOADING_CART})
  try {
    let res = await axios.post(
      "https://home-interior.onrender.com/cart",
      product
    );
    dispatch({ type: ADD_TO_CART, payload: res.data });
  } catch (err) {
    console.log(err);
    dispatch({type:ERROR_CART})
  }
};

export const update_cart =
  ({ id, a }) =>
  async (dispatch) => {
    dispatch({type:LOADING_CART});
    try{
      let res = await axios.patch(
        `https://home-interior.onrender.com/cart/${id}`,
        { count: a }
      );
      dispatch({ type: UPDATE_CART, payload: res.data });
    }
    catch(e){
      dispatch({type:ERROR_CART})
    }
   
  };

export const delete_from_cart = (id) => async (dispatch) => {
  dispatch({type:LOADING_CART});
  try{
    let res = await axios.delete(`https://home-interior.onrender.com/cart/${id}`);
    dispatch({ type: DELETE_FROM_CART, payload: id });
  }
  catch(e){
    dispatch({type:ERROR_CART})
  }
  
};
