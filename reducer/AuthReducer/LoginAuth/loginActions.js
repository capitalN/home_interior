import * as loginType from "./loginActionTypes"


// login actions

export const loginSuccess = (payload) => {
    return {type: loginType.LOGIN_SUCCESS, payload}
}

export const loginFailure = () => {
    return {type: loginType.LOGIN_FAILURE
    }
}

