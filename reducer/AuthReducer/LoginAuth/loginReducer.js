
import * as loginTypes from './loginActionTypes'

let initLoginState = {
    login: false,
    details: {}
}

try {

    if(localStorage.getItem("hiUser")){

        initLoginState = JSON.parse(localStorage.getItem("hiUser"))
        console.log("init", initLoginState)
    }
    else {

        initLoginState.details = {};
    }
} catch (error) {
    initLoginState.details = {};
}



export const loginReducer = (state=initLoginState, {type,payload}) => {
    
    switch(type){
        default:{
            return state;
        }

        case loginTypes.LOGIN_SUCCESS:{
            // console.log({...state, login: true, details: payload})
            // localStorage.setItem("hiUser", JSON.stringify({...state, login: true, details: payload}))
            return {...state, login: true, details: payload}
        }

        case loginTypes.LOGOUT_SUCCESS: {
            return {
                login: false,
                details: {}
            }
        }

    }
}
