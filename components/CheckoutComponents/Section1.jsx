import { DeleteCart, GetCartData, PatchCart } from '@/reducer/Cart/Cart.action'
import { PATCH_DATA } from '@/reducer/Cart/Cart.actionTypes'
import { InfoIcon } from '@chakra-ui/icons'
import { Flex, Select, Spacer, Text, Image, Box, Stack, Checkbox, VStack, HStack, Spinner } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const mediumtext = {
 fontSize:"14px",
}
const bigtext = {
    fontSize:"16px"
}
const smalltext = {
    fontSize:"12px"
}

const Section1 = ({name,image,type,categories, price, discount,id, count}) => {
    const dispatch = useDispatch();
    const { loading, error, Data } = useSelector((store)=>store.cartManager);
    const [ countVal ,setCountVal ] = useState(1);
    price = price*count;
    
    useEffect(()=>{
        dispatch(GetCartData());
     },[count])

    const handleDelete =(id)=>{
        dispatch(DeleteCart(id));
    }

    const handleChange = (e)=>{
        let a = e.target.value;
        let obj = {id, a};
        console.log(obj)
        dispatch(PatchCart(obj));
    }

    if(loading){
        return <Flex direction="column" justifyContent="center" alignItems="center" height="8rem" width="100%" margin="auto" gap="1rem"><Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      /></Flex>
    }
    if(error){
        return <div>Something went wrong...</div>
    }

    
   
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
                    <Image src={image} alt="im1" width="100%"/>
                    <Flex>
                        <Flex direction="column">
                          <Text style={mediumtext}>Delivery By <b>Thu, 16 Feb 2023</b></Text> 
                        </Flex>
                        
                    </Flex>
                    <Text onClick={()=>console.log("move to wishlist")} style={mediumtext} textAlign="center" border="1px solid grey" p="0.3rem">Move To Wishlist</Text>
                    <Box onClick={()=>{handleDelete(id)}}
                       width="100%"
                       disabled={true}
                       style={{cursor:"pointer"}}>
                        <Text textAlign="center" style={mediumtext} border="1px solid grey" p="0.3rem" width="100%" >Delete</Text>
                    </Box>
                </Flex>
            </Flex>
            <Flex direction="column"
                  flex="2">
                <Flex direction="column">
                    <Text style={mediumtext} m="0.4rem 0rem">
                        <b fontFamily="Manrope, sans-serif">{name}</b>
                    </Text>
                    <Text  m="0rem 0rem 1rem" style={mediumtext}>By Woodsworth <Text as="span" fontSize={12} color="#DC8109">36 Months' Warranty</Text></Text>
                </Flex>
                 <Flex direction="column" width="80%">
                 <Flex width="20%">
                    <Select value={count} onChange={handleChange}>
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
                        <Text p="0.5rem 0rem" style={mediumtext}>₹ <span style={mediumtext}>{price}</span></Text>
                    </Flex>
                    <Flex 
                     borderBottom="1px dashed grey">
                        <Text p="0.5rem 0rem" color="#67AD5B"
                        style={mediumtext}>Retail Discount</Text>
                        <Spacer/>
                        <Text p="0.5rem 0rem" color="#67AD5B" style={mediumtext}>-₹ <span style={mediumtext}>{Math.floor((price*discount)/100)}</span></Text>
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
                        <Text as="b" p="0.5rem 0rem" style={bigtext}>₹ <span>{Math.floor(price-((price*discount)/100)+1836)}</span></Text>
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