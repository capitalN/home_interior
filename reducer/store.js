import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import thunk from "redux-thunk";

import {authReducer} from "./AuthReducer/authReducer";
import { ProductReducer } from "./Product/Product.reducer";


import { adminReducer } from "./Admin/reducer";
import authReducer from "./AuthReducer/authReducer";


const rootReducer = combineReducers({
  authManager: authReducer,
  adminManager: adminReducer,
});

import { loginReducer } from "./AuthReducer/LoginAuth/loginReducer";
import { signupReducer } from "./AuthReducer/SignupAuth/signupReducer";




const rootReducer = combineReducers({
  authManager: authReducer,
  ProductManager:ProductReducer
});

const rootReducer = combineReducers({signupManager: signupReducer, loginManager: loginReducer});



const composeEnhancers = compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
