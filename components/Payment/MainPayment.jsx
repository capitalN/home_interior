import { Box, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import PaymentSection1 from './PaymentSection1'
import PaymentSection2 from './PaymentSection2'

const paymentform = {
  name:"",
  cvv:"",
  monthYear:"",
  cardNumber:"",
  UPIID:"",
  cardNumber:"",
  cardPassword:""
}

const MainPayment = () => {
  const [payform, setPayform] = useState(paymentform);

  const handleOnChange = (e)=>{
    const { value,name } = e.target;
    setPayform({...payform,[name]:value})
  }
  const handleOnClick = ()=>{
    setPayform(()=>paymentform)
  }
  const cardData = ()=>{
    setPayform({...payform,"cardNumber":"","cardPassword":""})
  }

  return (
    <Flex gap="1rem" width="85%" margin="auto">
        <Box flex="2">
            <PaymentSection1 cardData={handleOnClick} payform={payform} GetPaymentData={handleOnChange}/>
        </Box>
        <Box flex="1">
            <PaymentSection2 MakePayment={handleOnClick}/>
        </Box>
   
    </Flex>
  )
}

export default MainPayment