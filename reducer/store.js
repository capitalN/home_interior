import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import thunk from "redux-thunk";
import { adminReducer } from "./Admin/reducer";
import authReducer from "./AuthReducer/authReducer";

const rootReducer = combineReducers({
  authManager: authReducer,
  adminManager: adminReducer,
});

const composeEnhancers = compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
