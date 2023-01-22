
import * as signupTypes from './signupActionTypes'

const initSignupState = {
    details:[]
}

try {

    if(localStorage.getItem("hiUsers")){
        initSignupState.details = JSON.parse(localStorage.getItem("hiUsers"))
    } else {
        initSignupState.details = [];
    }
} catch(err) {
    initSignupState.details = [];
}

export const signupReducer = (state=initSignupState, {type,payload}) => {
    
    switch(type){
        default:{
            return state;
        }
        case signupTypes.SIGNUP_SUCCESS:{
            //  console.log({ details: [state.details, ...(payload? payload: {}) ]});
             return { ...state, details:[...state.details, payload] };
        }

    }
}