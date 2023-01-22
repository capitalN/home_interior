import * as signupType from "./signupActionTypes";

// signup action

export const signupSuccess = (payload) => {
  const hiUsers = localStorage.getItem("hiUsers")
    ? JSON.parse(localStorage.getItem("hiUsers"))
    : [];

  const duplicate = hiUsers.filter(
    (user) => user.email === payload.email || user.mobile === payload.mobile
  );

  if (duplicate.length == 0) {
    hiUsers.push(payload);
    localStorage.setItem("hiUsers", JSON.stringify(hiUsers));
    alert("Success!");
    return { type: signupType.SIGNUP_SUCCESS, payload };
  } else {
    alert("User Already Exists! Try using other email ID");
    return { type: signupType.SIGNUP_FAILURE, payload };
  }
};
