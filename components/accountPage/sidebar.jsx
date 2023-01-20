import { Box, Divider, Heading, Stack, Text } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = ({route}) => {
    const loginStore = useSelector((store)=>store.loginManager);
    const {details} = loginStore;
    console.log(details);

  return (
   <>
   <Stack gap={4}>
     <Box>
        <Heading size={"md"}>Hi {details.name}!</Heading>
     </Box>
     <Divider colorScheme="orange" />
     <Box>
        <Heading size={"md"} color={route=="/account" ? "brand.600" : "black"}>My Profile <ChevronRightIcon/></Heading>
        <Text fontSize="sm" color={"gray.500"}>Edit Your Account Details</Text>
     </Box>
     <Divider colorScheme="orange" />
     <Box>
        <Heading size={"md"} color={route=="/orders" ? "brand.600" : "black"}>My Orders <ChevronRightIcon/></Heading>
        <Text fontSize="sm" color={"gray.500"}>Edit Your Account Details</Text>
     </Box>
     <Divider colorScheme="orange" />
     <Box>
        <Heading size={"md"} color={route=="/orders" ? "brand.600" : "black"}>My Wallet <ChevronRightIcon/></Heading>
        <Text fontSize="sm" color={"brand.500"}>5000 Credits</Text>
     </Box>
     <Divider colorScheme="orange" />
     <Box>
        <Heading size={"md"} color={route=="/orders" ? "brand.600" : "black"}>My Wishlist <ChevronRightIcon/></Heading>
        <Text fontSize="sm" color={"gray.500"}>Your Favourites, All In One Place</Text>
     </Box>
   </Stack>
   <Divider colorScheme="orange" orientation='vertical' />
   </>
  )
}

export default Sidebar