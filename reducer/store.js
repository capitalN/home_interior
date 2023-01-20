import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import thunk from "redux-thunk";
import {authReducer} from "./AuthReducer/authReducer";
import { ProductReducer } from "./Product/Product.reducer";


const rootReducer = combineReducers({
  authManager: authReducer,
  ProductManager:ProductReducer
});

const composeEnhancers = compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
