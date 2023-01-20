
import * as signupTypes from './signupActionTypes'

const initSignupState = {
    details: [{name: 'Arun Rana', mobile: '12341234', email: 'abc@gmail.com', password: 'asd123!@#'}]
}

export const signupReducer = (state=initSignupState, {type,payload}) => {
    
    switch(type){
        default:{
            return state;
        }
        case signupTypes.SIGNUP_SUCCESS:{
             console.log({...state, details: [...state.details, payload ]});
             return {...state, details: [...state.details, payload ]};
        }
    }
}
