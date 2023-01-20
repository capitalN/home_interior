import Section1 from '@/components/CheckoutComponents/Section1'
import Section2 from '@/components/CheckoutComponents/Section2'
import { Flex, Heading,Box, Text } from '@chakra-ui/react'
import React from 'react'
import style from "./MainCheckout.module.css"


const MainCheckoutPage = () => {
  return (
    <div>
          <Flex direction="column"
             >
            <Flex p="1rem"  
                  width="80%"
                  m="auto">
              <Heading as="h3" fontSize={17}>Your Cart(4Items)</Heading>
            </Flex>
            <Flex width="85%" 
                  p="1rem" 
                  direction={{base:"column-reverse", md:"row"}}
                  gap="1rem"
                  m="auto">
              <Box flex="1.5" 
                  
                  >
                  <Flex direction="column" 
                        justifyContent="center" >
                 <Text bgColor="#F0F7EF" 
                       color="#67AD5B"
                       textAlign="center"
                       mb="0.5rem"
                       p="0.6rem" >You saved <b>₹ 16,200</b>  On This Order</Text>
                 </Flex>
                 <Flex >
                     <Box  height="30rem" 
                           width="100%"
                           overflowY="scroll"
                           className={style.checkout}
                          >
                        <Section1 key="key1"/>
                        <Section1 key="key2"/>
                     </Box>
                    
                 </Flex>
                   
              </Box>
              <Section2/>
            </Flex>
        </Flex>
    </div>
  )
}

export default MainCheckoutPage