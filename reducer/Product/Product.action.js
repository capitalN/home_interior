import {
  GET_PRODUCT_SORT,
  GET_PRODUCT_FILTER,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_LOADING,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_BYFILTER,
  GET_PRODUCT_BYTYPE,
} from "./Product.type.js";
import { getProductbyAPI } from "./Product.API.js";

export const GetProduct = (str, page) => async (dispatch) => {
  dispatch({ type: GET_PRODUCT_LOADING });
 // console.log("getProoo===>",str,page)
  try {
    let data = await getProductbyAPI(str, page);
    dispatch({ type: GET_PRODUCT_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: GET_PRODUCT_ERROR, payload: err.message });
  }
};

export const GetfilterProduct = (e, str) => async (dispatch) => {
  let { value, checked } = e.target;
  let a = Number(value);
  let b = 0;

  if (a === 200000) b = Infinity;
  if (a === 100000) b = 200000;
  if (a === 50000) b = 100000;
  if (a === 0) b = 50000;

  dispatch({ type: GET_PRODUCT_LOADING });
  try {
    if (checked) {
      let data = await getProductbyAPI(str);
      dispatch({ type: GET_PRODUCT_FILTER, payload: { a, b, checked, data } });
    } else {
      let data = await getProductbyAPI(str);
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: data });
    }
  } catch (err) {
    dispatch({ type: GET_PRODUCT_ERROR, payload: err.message });
  }
};

export const GetSortProduct = (e, str) => async (dispatch) => {
  let { value, checked } = e.target;

  dispatch({ type: GET_PRODUCT_LOADING });

  try {
    if (checked) {
      let data = await getProductbyAPI(str);

      if (value === "asc") {
        data.sort((a, b) => {
          if (a.price > b.price) return 1;
          if (a.price < b.price) return -1;
          return 0;
        });
      } else if (value === "desc") {
        data.sort((a, b) => {
          if (a.price > b.price) return -1;
          if (a.price < b.price) return 1;
          return 0;
        });
      }

      dispatch({ type: GET_PRODUCT_SORT, payload: { value, data } });
    } else {
      let data = await getProductbyAPI(str);
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: data });
    }
  } catch (err) {
    dispatch({ type: GET_PRODUCT_ERROR, payload: err.message });
  }
};

export const GetfilterData = (e, str) => async (dispatch) => {
  let { value, checked } = e.target;

  console.log(value, checked, str);

  dispatch({ type: GET_PRODUCT_LOADING });
  try {
    if (checked) {
      let data = await getProductbyAPI(str);
      console.log(data, 7895);
      dispatch({ type: GET_PRODUCT_BYFILTER, payload: { value, data } });
    } else {
      let data = await getProductbyAPI(str);
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: data });
    }
  } catch (err) {
    dispatch({ type: GET_PRODUCT_ERROR, payload: err.message });
  }
};

export const GetByType = (e, str) => async (dispatch) => {
  let { value, checked } = e.target;

  dispatch({ type: GET_PRODUCT_LOADING });
  try {
    if (checked) {
      let data = await getProductbyAPI(str);
      let newdata = data.filter((ele) => ele.categories === value);
      dispatch({ type: GET_PRODUCT_BYTYPE, payload: { value, newdata } });
    } else {
      let data = await getProductbyAPI(str);
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: data });
    }
  } catch (err) {
    dispatch({ type: GET_PRODUCT_ERROR, payload: err.message });
  }
};
