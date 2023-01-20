import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "./AuthReducer/LoginAuth/loginReducer";
import { signupReducer } from "./AuthReducer/SignupAuth/signupReducer";



const rootReducer = combineReducers({signupManager: signupReducer, loginManager: loginReducer});

const composeEnhancers = compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
