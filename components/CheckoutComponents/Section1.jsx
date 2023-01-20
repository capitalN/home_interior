import { InfoIcon } from '@chakra-ui/icons'
import { Flex, Select, Spacer, Text, Image, Box, Stack, Checkbox, VStack, HStack } from '@chakra-ui/react'
import React from 'react'

const mediumtext = {
 fontSize:"14px",
}
const bigtext = {
    fontSize:"16px"
}
const smalltext = {
    fontSize:"12px"
}

const Section1 = () => {
  return (
    <Flex direction="column" 
          width="100%" 
          p="0.3rem"
          gap="1rem"
         >
        <Flex gap="1rem" 
              border="1px solid grey"
              borderRadius="5px"
              direction={{base:"column",sm:"row"}}
              p="1rem 1rem"
              justifyContent="space-between"
              alignItems="center">
            <Flex  flex="1" 
                   justifyContent="center"
                   width="95%">
                <Flex 
                   gap="1rem"
                   width="95%"
                   justifyContent="center"
                   direction="column">
                    <Image src="https://ii3.pepperfry.com/media/catalog/product/a/v/150x165/avian-solid-wood-night-stand-in-provincial-teak-finish-by-woodsworth-avian-solid-wood-night-stand-in-8y6pap.jpg" alt="im1" width="100%"/>
                    <Flex>
                        <Flex direction="column">
                          <Text style={mediumtext}>Delivery By <b>Thu, 16 Feb 2023</b></Text> 
                        </Flex>
                        
                    </Flex>
                    <Text onClick={()=>console.log("move to wishlist")} style={mediumtext} textAlign="center" border="1px solid grey" p="0.3rem">Move To Wishlist</Text>
                    <Box onClick={()=>console.log("delete")}
                       width="100%"
                       style={{cursor:"pointer"}}>
                        <Text textAlign="center" style={mediumtext} border="1px solid grey" p="0.3rem" width="100%">Delete</Text>
                    </Box>
                </Flex>
            </Flex>
            <Flex direction="column"
                  flex="2">
                <Flex direction="column">
                    <Text style={mediumtext} m="0.4rem 0rem">
                        <b fontFamily="Manrope, sans-serif">Avian dashed Night Stanc in Provincial teak Finish B...</b>
                    </Text>
                    <Text  m="0rem 0rem 1rem" style={mediumtext}>By Woodsworth <Text as="span" fontSize={12} color="#DC8109">36 Months' Warranty</Text></Text>
                </Flex>
                 <Flex direction="column" width="80%">
                 <Flex width="20%">
                    <Select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </Select>
                </Flex>
                <Stack>
                    <Flex borderBottom="1px dashed grey">
                        <Text p="0.5rem 0rem" style={mediumtext}>MRP</Text>
                        <Spacer/>
                        <Text p="0.5rem 0rem" style={mediumtext}>₹ <span style={mediumtext}>59,996</span></Text>
                    </Flex>
                    <Flex 
                     borderBottom="1px dashed grey">
                        <Text p="0.5rem 0rem" color="#67AD5B"
                        style={mediumtext}>Retail Discount</Text>
                        <Spacer/>
                        <Text p="0.5rem 0rem" color="#67AD5B" style={mediumtext}>-₹ <span style={mediumtext}>14,432</span></Text>
                    </Flex>
                    <Flex 
                     borderBottom="1px dashed grey">
                        <Text p="0.5rem 0rem" style={mediumtext}>Delivery/Handling</Text>
                        <Spacer/>
                        <Text  p="0.5rem 0rem" style={mediumtext}>₹ 1,836</Text>
                    </Flex>
                    <Flex 
                     borderBottom="1px dashed grey">
                        <Text p="1rem 0rem" as="b" style={bigtext}>ITEM PRICE</Text>
                        <Spacer/>
                        <Text as="b" p="0.5rem 0rem" style={bigtext}>₹ <span>47,400</span></Text>
                    </Flex>
                </Stack>
                <Flex justifyContent="left" 
                      alignItems="center" 
                      gap="1rem"
                      p="0.5rem 0rem">
                  <Checkbox size='lg' colorScheme='orange' defaultChecked></Checkbox>
                  <VStack>
                     <Text style={smalltext}>1 Year of Furniture Protection <InfoIcon/></Text>
                     <Text style={smalltext} >Only ₹6/Day</Text>
                  </VStack>
                </Flex>
                 </Flex>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default Section1