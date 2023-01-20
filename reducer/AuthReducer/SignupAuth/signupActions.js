import * as signupType from './signupActionTypes'

// signup action

export const signupSuccess = (payload) => {
    return{type: signupType.SIGNUP_SUCCESS, payload}
}
