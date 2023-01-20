import { Box, Divider, Heading, Stack, Text } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import React from 'react'
import { useSelector } from 'react-redux'
import Router, { useRouter } from 'next/router'

const Sidebar = ({linkEndPoint}) => {
   const route = useRouter();
    const loginStore = useSelector((store)=>store.loginManager);
    const {details} = loginStore;

    const handlePageChange = (endpoint) => {
      route.push(endpoint);
    }

  return (
   <>
   <Stack gap={4}>
     <Box>
        <Heading size={"md"}>Hi {details.name}!</Heading>
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