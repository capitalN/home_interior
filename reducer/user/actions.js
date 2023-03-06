import { baseURL } from "@/base";
import axios from "axios";
import { USER_LOGIN, USER_REGISTER } from "./actionTypes";

export const user_register = (data) => async (dispatch) => {
  try {
    let res = await axios({
      method: "POST",
      baseURL,
      url: `users`,
      data: { ...data, id: data.email },
    });
    alert("SUCCESS, user registerd, please login");
    dispatch({
      type: USER_REGISTER,
      payload: res.data,
    });
  } catch (error) {
    alert("WARNING, user alredy exist, please login...");
  }
};

export const user_login = (data) => async (dispatch) => {
  try {
    let res = await axios({
      method: "GET",
      baseURL,
      url: `users/${data.email}`,
    });

    if (res.data.password != data.password) {
      alert("WARNING, wrong credentials");
      return;
    }

    localStorage.setItem("hiUser", JSON.stringify(res.data));
    alert("SUCCESS, login successfull");
    dispatch({
      type: USER_LOGIN,
      payload: res.data,
    });
  } catch (error) {
    alert("ERROR, user not found");
  }
};
