import { Box, Button, Divider, Heading, Stack, Text, Flex } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import React from "react";

import { useRouter } from "next/router";

import { useDispatch, useSelector } from "react-redux";

import { logoutUser } from "@/reducer/AuthReducer/LoginAuth/loginActions";

let user = {
  login: false,
  details: {},
};
try {
  user = JSON.parse(localStorage.getItem("hiUser"));
} catch (error) {}

const Sidebar = ({ linkEndPoint }) => {
  const route = useRouter();
  const loginStore = useSelector((store) => store.loginManager);
  const dispatch = useDispatch();
  const { details } = loginStore;


  const handlePageChange = (endpoint) => {
    route.push(endpoint);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    route.push("/");
  };
  

  return (
    <>
      <Stack spacing={2}  p="1rem" boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px" >
        <Box
           pb="0.5rem"
           mb="1rem"
           borderBottom={route.pathname==="/account"?"2px solid #FF7035":"0px solid #FFFFFF"}
           onClick={() => handlePageChange("/account")}
           _hover={{ cursor: "pointer" }}
       >
         <Heading
           fontSize="17px"
           fontFamily="Manrope, sans-serif"
           color={linkEndPoint == "/account" ? "brand.600" : "black"}
         >
           My Profile <ChevronRightIcon />
         </Heading>
         <Text fontSize="sm" fontFamily="Manrope, sans-serif" color="#5B5B5B">
           Edit Your Account Details
         </Text>
       </Box>
       <Box
          pb="1rem"
          borderBottom={route.pathname==="/orders"?"2px solid #FF7035":"0px solid #FFFFFF"}
          onClick={() => handlePageChange("/orders")}
          _hover={{ cursor: "pointer" }}
       >
         <Heading
           fontSize="17px"
           fontFamily="Manrope, sans-serif"
           color={linkEndPoint == "/orders" ? "brand.600" : "black"}
         >
           My Orders <ChevronRightIcon />
         </Heading>
         <Text fontSize="sm" fontFamily="Manrope, sans-serif" color="#5B5B5B" >
           Edit Your Account Details
         </Text>
       </Box>
       <Box
          pb="1rem"
          borderBottom={route.pathname==="/wallet"?"2px solid #FF7035":"0px solid #FFFFFF"}
          onClick={() => handlePageChange("/wallet")}
         _hover={{ cursor: "pointer" }}
       >
         <Heading
           fontSize="17px"
           fontFamily="Manrope, sans-serif"
           color={linkEndPoint == "/wallet" ? "brand.600" : "black"}
         >
           My Wallet <ChevronRightIcon />
         </Heading>
         <Text fontSize="sm" fontFamily="Manrope, sans-serif" color="#5B5B5B" >
           5000 Credits
         </Text>
       </Box>
       <Box
          pb="1rem"
          borderBottom={route.pathname==="/mycart"?"2px solid #FF7035":"0px solid #FFFFFF"}
          onClick={() => handlePageChange("/mycart")}
         _hover={{ cursor: "pointer" }}
       >
         <Heading
         fontSize="17px"
         fontFamily="Manrope, sans-serif"
           color={linkEndPoint == "/mycart" ? "brand.600" : "black"}
         >
           My Cart <ChevronRightIcon />
         </Heading>
         <Text fontSize="sm" fontFamily="Manrope, sans-serif" color="#5B5B5B">
           Your Favourites, All In One Place
         </Text>
       </Box>
      
        <Button  fontFamily="Manrope, sans-serif" mt={4} onClick={handleLogout} fontSize="14px" h="1rem" p="1rem">
          Logout
        </Button>
      </Stack>
      <Divider colorScheme="black" orientation="vertical" />
    </>
  );
};

export default Sidebar;