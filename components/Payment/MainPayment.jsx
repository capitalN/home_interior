import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import PaymentSection1 from './PaymentSection1'
import PaymentSection2 from './PaymentSection2'

const MainPayment = () => {
  return (
    <Flex gap="1rem" width="85%" margin="auto">
        <Box flex="2">
            <PaymentSection1/>
        </Box>
        <Box flex="1">
            <PaymentSection2/>
        </Box>
   
    </Flex>
  )
}

export default MainPayment