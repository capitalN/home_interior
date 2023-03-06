import {
  GET_PRODUCT_BYFILTER,
  GET_PRODUCT_SORT,
  GET_PRODUCT_FILTER,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_LOADING,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_BYTYPE,
} from "./Product.type.js";

let initialData = {
  loading: false,
  error: false,
  Data: [],
  FiterData: [],
};

export const ProductReducer = (state = initialData, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT_LOADING: {
      return {
        ...state,
        loading: true,
        error: "",
        Data: [],
      };
    }

    case GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        Data: payload,
      };
    }

    case GET_PRODUCT_ERROR: {
      return {
        ...state,
        loading: false,
        error: payload,
        Data: [],
      };
    }
    case GET_PRODUCT_FILTER: {
      let newdata = payload.data.filter(
        (ele) => ele.price >= payload.a && ele.price <= payload.b
      );
      return {
        ...state,
        loading: false,
        error: payload,
        Data: newdata,
      };
    }

    case GET_PRODUCT_SORT: {
      return {
        ...state,
        loading: false,
        error: payload,
        Data: payload.data,
      };
    }

    case GET_PRODUCT_BYFILTER: {
     
      let newdata = payload.data.filter((ele) => ele.prints === payload.value);
    
      return {
        ...state,
        loading: false,
        error: false,
        Data: newdata,
      };
    }
    case GET_PRODUCT_BYTYPE: {
      return {
        ...state,
        loading: false,
        error: false,
        Data: payload.newdata,
      };
    }

    default: {
      return state;
    }
  }
};
