import Sidebar from "@/components/accountPage/sidebar";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

const Orders = () => {
  const loginStore = useSelector((store) => store.loginManager);
  const { route } = useRouter();
  return (
    <Flex width={"90%"} py={10} m="auto">
      <Sidebar linkEndPoint={route} />
      <Flex width={"900px"} alignItems="center" gap={4} direction={"column"} paddingLeft={20}>
        <Heading size={"lg"}>No Orders Here</Heading>
        <Text color="gray.400" mb={10}>You Have Not Placed any orders yet</Text>
        <Image src="https://ii1.pepperfry.com//images/svg/w21-empty-orders-img.svg" width={400} height={400} alt="Section Image"/>
        <Link href="/"><Button bg="brand.800" marginTop={20} rounded={"none"}>
            Continue Shopping
        </Button></Link>
      </Flex>
    </Flex>
  );
};

export default Orders;
