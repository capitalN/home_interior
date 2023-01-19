import * as authType from "./authActionTypes"

export const loginRequest = () => {
    return {type: authType.AUTH_LOADING}
}

export const loginSuccess = (payload) => {
    return {type: authType.AUTH_SUCCESS, payload}
}

export const loginFailure = () => {
    return {type: authType.AUTH_FAILURE
    }
}