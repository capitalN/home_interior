import MainCheckoutPage from "@/components/CheckoutComponents/MainCheckoutPage"
import { GetCartData } from "@/reducer/Cart/Cart.action";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const checkout = () => {
 
  return (
    <div>
      <MainCheckoutPage/>
    </div>
  )
}

export default checkout