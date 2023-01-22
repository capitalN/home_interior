import * as loginType from "./loginActionTypes"

// login actions



export const loginSuccess = (payload) => {
    
    const hiUser = localStorage.getItem("hiUser") ? JSON.parse(localStorage.getItem("hiUser")) : null;

    if(hiUser==null){
        localStorage.setItem("hiUser", JSON.stringify({login: true, details:payload}))
        return {type: loginType.LOGIN_SUCCESS, payload}
    }
    else {
        return {type: loginType.LOGIN_FAILURE, payload}
    }

}

export const logoutUser = () => {
    localStorage.removeItem("hiUser");
    
    return {type: loginType.LOGOUT_SUCCESS}
}

