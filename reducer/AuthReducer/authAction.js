import * as authType from "./authActionTypes"

export const loginRequest = () => {
    return {type: authType.AUTH_LOADING}
}

export const loginSuccess = () => {
    return {type: authType.AUTH_SUCCESS}
}

export const loginFailure = () => {
    return {type: authType.AUTH_FAILURE
    }
}