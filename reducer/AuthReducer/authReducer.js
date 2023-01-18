
import * as authActions from './authAction'

const intiState = {
    login: false,
    loading: false,
    error: false,
    details: []
}

const actionReducer = (state=intiState, {type, payload}) => {
    switch(type){
        default:{
            return state;
        }

        case authActions.loginRequest:{
            return {...state, loading:true}
        }

        case authActions.loginSuccess:{
            return {...state, loading: false, details: payload}
        }

        case authActions.loginFailure:{
            return {...state, loading: false, error: true}
        }
    }
}