import axios from "axios";
import {
  CART_ERROR,
  CART_LOADING,
  GET_CART_SUCCESS,
  GET_CART_SUCCESS_RECENTLY_VIEW,
  GET_CART_SUCCESS_WISHLIST,
  POST_CART_SUCCESS,
  DELETE_CART_SUCCESS,
} from "./Cart.actionTypes";

// export const PostToCart = async (payload) => {
//   let response = await axios.post(
//     `https://home-interior-api-uqah.onrender.com/products`,
//     payload
//   );
//   PostToRecentlyViewed(payload);
// };

export const PostToCart = (payload) => async (dispatch) => {
  let response = await axios.post(
    `https://home-interior-api-uqah.onrender.com/products`,
    payload
  );
  dispatch({ type: POST_CART_SUCCESS, payload: response.data });
};












////////////////////

export const PostToRecentlyViewed = async (payload) => {
  let response = await axios.post(
    `https://home-interior-api-uqah.onrender.com/recently_viewed`,
    payload
  );
};

export const PostToWishList = async (payload) => {
  let response = await axios.post(
    `https://home-interior-api-uqah.onrender.com/wishlist`,
    payload
  );
};

export const DeleteCart = (id) => async (dispatch) => {
  let response = await axios.delete(
    `https://home-interior-api-uqah.onrender.com/products/${id}`
  );
  dispatch({ type: DELETE_CART_SUCCESS, payload: id });
};

export const DeleteRecentlyViewed = async (id) => {
  let response = await axios.delete(
    `https://home-interior-api-uqah.onrender.com/recently_viewed/${id}`
  );
};

export const DeleteWishList = async (id) => {
  let response = await axios.delete(
    `https://home-interior-api-uqah.onrender.com/wishlist/${id}`
  );
};

export const GetCartData = () => async (dispatch) => {
  dispatch({ type: CART_LOADING });
  try {
    let res = await axios.get(
      `https://home-interior-api-uqah.onrender.com/products`
    );
    // PostToRecentlyViewed(payload);
    // console.log(res);
    dispatch({ type: GET_CART_SUCCESS, payload: res.data });
    return res.data;
  } catch (error) {
    console.log(error);
    dispatch({ type: CART_ERROR });
  }
};

export const GetRecentlyViewed = () => async (dispatch) => {
  dispatch({ type: CART_LOADING });
  try {
    let res = await axios.get(
      `https://home-interior-api-uqah.onrender.com/recently_viewed`
    );
    // PostToRecentlyViewed(payload)
    dispatch({ type: GET_CART_SUCCESS_RECENTLY_VIEW, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: CART_ERROR });
  }
};

export const GetWishList = () => async (dispatch) => {
  dispatch({ type: CART_LOADING });
  try {
    let res = await axios.get(
      `https://home-interior-api-uqah.onrender.com/wishlist`
    );
    // PostToRecentlyViewed(payload)
    dispatch({ type: GET_CART_SUCCESS_WISHLIST, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: CART_ERROR });
  }
};

export const PatchCart =
  ({ id, a }) =>
  async (dispatch) => {
    console.log(id, a);
    try {
      let response = await axios.patch(
        `https://home-interior-api-uqah.onrender.com/products/${id}`,
        { count: a }
      );
      console.log(response);
      dispatch(GetCartData());
    } catch (e) {
      console.log(e);
    }
  };
