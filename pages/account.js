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
  const { details } = loginStore;
  console.log(details);
  const { route } = useRouter();
  console.log(route);
  return (
    <Flex width={"90%"} py={10} m="auto">
      <Sidebar route={route} />
      <Box width={"900px"}>
        <Flex justifyContent={"space-around"}>
          <Flex gap={4}>
            <Avatar size={"xl"} />
            <Stack>
              <Heading size={"md"}>Personal information</Heading>
              <Text>{details.name}</Text>
              <Text>{details.email}</Text>
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
