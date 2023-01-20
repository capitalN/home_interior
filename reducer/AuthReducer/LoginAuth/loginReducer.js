
import * as loginTypes from './loginActionTypes'

const initLoginState = {
    login: false,
    error: false,
    details: {name: 'Arun Rana', mobile: '12341234', email: 'abc@gmail.com', password: 'asd123!@#'}
}

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
