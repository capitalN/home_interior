import MainCheckoutPage from "@/components/CheckoutComponents/MainCheckoutPage";
import PrivateRoute from "@/components/PrivateRoute";
import { GetCartData } from "@/reducer/Cart/Cart.action";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const checkout = () => {
  
  return (
    <PrivateRoute>
      <MainCheckoutPage />
    </PrivateRoute>
  );
};

export default checkout;
