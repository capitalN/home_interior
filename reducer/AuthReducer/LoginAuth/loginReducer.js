
import * as loginTypes from './loginActionTypes'

const initLoginState = {
    login: false,
    error: false,
    details: {}
}

// if(localStorage.getItem("loginStatus")){
//     initLoginState={
//         login: true,
//         error: false,
//         details: JSON.parse(localStorage.getItem("loginStatus"))
//     }
// }
// else{
//     initLoginState = {...initLoginState, details:{}}
// }

export const loginReducer = (state=initLoginState, {type,payload}) => {
    
    switch(type){
        default:{
            return state;
        }

        case loginTypes.LOGIN_SUCCESS:{
            console.log({...state, login: true, details: payload, error: false})
            return {...state, login: true, details: payload, error: false}
        }

        case loginTypes.LOGIN_FAILURE:{
            console.log("called")
            return {...state, error: true}
        }
    }
}
