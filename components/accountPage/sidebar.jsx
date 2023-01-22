import { Box, Button, Divider, Heading, Stack, Text } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import  { useRouter } from 'next/router'
import { logoutUser } from '@/reducer/AuthReducer/LoginAuth/loginActions'

let user={
   login:false,
   details:{}
};
  try {
    user = JSON.parse(localStorage.getItem("hiUser"));
  } catch (error) {
    
  }

const Sidebar = ({linkEndPoint}) => {
   const route = useRouter();
    const loginStore = useSelector((store)=>store.loginManager);
    const dispatch = useDispatch();
    const {details} = loginStore;

    const handlePageChange = (endpoint) => {
      route.push(endpoint);
    }

    const handleLogout = () => {
      dispatch(logoutUser())
      route.push("/")
    }

  return (
   <>
   <Stack gap={4}>
     <Box>
        <Heading size={"md"}>Hi {details.name}!</Heading>
        <Button mt={4} onClick={handleLogout}>Logout</Button>
     </Box>
     <Divider colorScheme="black" />
     <Box onClick = {()=> handlePageChange("/account")} _hover={{cursor: "pointer"}}>
        <Heading size={"md"} color={linkEndPoint=="/account" ? "brand.600" : "black"}>My Profile <ChevronRightIcon/></Heading>
        <Text fontSize="sm" color={"gray.500"}>Edit Your Account Details</Text>
     </Box>
     <Divider colorScheme="black" />
     <Box onClick = {()=> handlePageChange("/orders")} _hover={{cursor: "pointer"}}>
        <Heading size={"md"} color={linkEndPoint=="/orders" ? "brand.600" : "black"}>My Orders <ChevronRightIcon/></Heading>
        <Text fontSize="sm" color={"gray.500"}>Edit Your Account Details</Text>
     </Box>
     <Divider colorScheme="black" />
     <Box onClick = {()=> handlePageChange("/wallet")} _hover={{cursor: "pointer"}}>
        <Heading size={"md"} color={linkEndPoint=="/wallet" ? "brand.600" : "black"}>My Wallet <ChevronRightIcon/></Heading>
        <Text fontSize="sm" color={"brand.500"}>5000 Credits</Text>
     </Box>
     <Divider colorScheme="black" />
     <Box onClick = {()=> handlePageChange("/wishlist")} _hover={{cursor: "pointer"}}>
        <Heading size={"md"} color={linkEndPoint=="/wishlist" ? "brand.600" : "black"}>My Wishlist <ChevronRightIcon/></Heading>
        <Text fontSize="sm" color={"gray.500"}>Your Favourites, All In One Place</Text>
     </Box>
   </Stack>
   <Divider colorScheme="black" orientation='vertical' />
   </>
  )
}

export default Sidebar