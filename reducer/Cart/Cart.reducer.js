// import * as types from "./cart.types";

import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  ERROR_CART,
  GET_CART,
  ITEM_EXIST,
  LOADING_CART,
  UPDATE_CART,
} from "./Cart.actionTypes";

const initialState = {
  loading:false,
  error:false,
  item_exist: false,
  CART: [],
  item_deleted: false,
  loading:false
};

export const CartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING_CART:{
      return {
        ...state,
        loading:true,
        error:false
      }
    }
    case ERROR_CART:{
      return {
        ...state,
        error:true,
        loading:false
      }
    }
    case GET_CART: {
      return {
        ...state,
        loading:false,
        error:false,
        CART: payload,
      };
    }
    case ADD_TO_CART: {
      return {
        ...state,
        loading:false,
        error:false,
        CART: [...state.CART, payload],
      };
    }
    case ITEM_EXIST: {
      return {
        ...state,
        loading:false,
        error:false,
        item_exist: true,
      };
    }
    case UPDATE_CART: {
      let updated = state.CART.map((el) => {
        if (el.id == payload.id) {
          return payload;
        }
        return el;
      });
      return {
        ...state,
        CART: updated,
        loading:false,
        error:false,
      };
    }
    case DELETE_FROM_CART: {
      let updated = state.CART.filter((el) => {
        if (el.id !== payload) {
          return el;
        }
      });
      return {
        ...state,
        loading:false,
        error:false,
        CART: updated,
        item_deleted: true,
      };
    }
    default:
      return state;
  }
};
