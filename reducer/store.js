import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import thunk from "redux-thunk";

import { ProductReducer } from "./Product/Product.reducer";
import { adminReducer } from "./Admin/reducer";
import { loginReducer } from "./AuthReducer/LoginAuth/loginReducer";
import { signupReducer } from "./AuthReducer/SignupAuth/signupReducer";
import { CartReducer } from "./Cart/Cart.reducer";
import { UserReducer } from "./user/reducer";

const rootReducer = combineReducers({
  cartManager: CartReducer,
  ProductManager: ProductReducer,
  signupManager: signupReducer,
  loginManager: loginReducer,
  adminManager: adminReducer,
  userManager: UserReducer,
});

const composeEnhancers = compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
