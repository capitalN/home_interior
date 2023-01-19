
import * as authActionsTypes from './authActionTypes'

const initState = {
    login: false,
    loading: false,
    error: false,
    details: []
}

export const authReducer = (state=initState, {type,payload}) => {
    
    switch(type){
        default:{
            return state;
        }

        case authActionsTypes.AUTH_LOADING:{
            return {...state, loading:true}
        }

        case authActionsTypes.AUTH_SUCCESS:{
            return {...state, loading: false, details: payload}
        }

        case authActionsTypes.AUTH_FAILURE:{
            return {...state, loading: false, error: true}
        }
    }
}
