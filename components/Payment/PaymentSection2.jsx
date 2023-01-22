import { GetCartData } from '@/reducer/Cart/Cart.action'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Section2 from '../CheckoutComponents/Section2'

const PaymentSection2 = () => {
  const data = useSelector((store)=>store.cartManager.Data);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(GetCartData())
 },[])
  return (
    <div flex="1.4"><Section2 data={data} val1="none" flagg="true" /></div>
  )
}

export default PaymentSection2