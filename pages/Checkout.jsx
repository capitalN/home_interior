import Section1 from '@/components/CheckoutComponents/Section1'
import Section2 from '@/components/CheckoutComponents/Section2'
import { Flex, Heading,Box } from '@chakra-ui/react'
import React from 'react'

const checkout = () => {
  return (
    <div>
        <Flex direction="column"
             >
            <Flex p="1rem"  
                  width="85%"
                  m="auto">
              <Heading as="h3" fontSize={17}>Your Cart(4Items)</Heading>
            </Flex>
            <Flex width="85%" 
                  p="1rem" 
                  direction={{base:"column-reverse", md:"row"}}
                  gap="1rem"
                  m="auto">
              <Box flex="1.5"  height="auto">
                <Section1/>
              </Box>
              <Section2/>
            </Flex>
        </Flex>
    </div>
  )
}

export default checkout