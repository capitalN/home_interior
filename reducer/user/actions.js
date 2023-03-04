import axios from "axios";
import { USER_LOGIN, USER_REGISTER } from "./actionTypes";

const baseURL =
  process.env.baseURL || "https://lonely-long-johns-fish.cyclic.app";

export const user_register = (data) => async (dispatch) => {
  try {
    let res = await axios({
      method: "POST",
      baseURL,
      url: `users/register`,
      data,
    });
    alert(`${res.data.msg}, please login` || res.data.err);
    if (res.data.err) {
      return;
    }

    dispatch({
      type: USER_REGISTER,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const user_login = (data) => async (dispatch) => {
  try {
    let res = await axios({
      method: "POST",
      baseURL,
      url: `users/login`,
      data,
    });
    alert(res.data.msg || res.data.err);
    if (res.data.err) {
      return;
    }
    localStorage.setItem("token", res.data.token);
    dispatch({
      type: USER_LOGIN,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
