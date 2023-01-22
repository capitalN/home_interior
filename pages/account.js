import Sidebar from "@/components/accountPage/sidebar";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";

const userAccount = () => {
  const loginStore = useSelector((store) => store.loginManager);
  const route = useRouter();

  let user = null;
  try {
    user = JSON.parse(localStorage.getItem("hiUser"));
  } catch (error) {}

  if (!loginStore.login) {
    try {
      localStorage.removeItem("hiUser");
      route.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Flex width={"90%"} py={10} m="auto">
      <Sidebar linkEndPoint={route} />
      <Box width={"900px"}>
        <Flex justifyContent={"space-around"}>
          <Flex gap={4}>
            <Avatar size={"xl"} name={loginStore.details.name} />
            <Stack>
              <Heading size={"md"}>Personal information</Heading>
              <Text>{loginStore.details.name}</Text>
              <Text>{loginStore.details.email}</Text>
            </Stack>
          </Flex>
          <Button bg="brand.800" rounded={"none"}>
            Edit Profile
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default userAccount;
