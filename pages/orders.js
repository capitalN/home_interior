import Sidebar from "@/components/accountPage/sidebar";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  Image,
  Container,
  HStack,
  Link,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { useEffect } from "react";
import { useState } from "react";
// import Link from "next/link";

const Orders = () => {
  const loginStore = useSelector((store) => store.loginManager);
  const { route } = useRouter();
  const goBack = () => {
    route;
  };

  const [history, setHistory] = useState([]);

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem("history")) || [];
    setHistory(storage);
  }, []);

  return !history.length ? (
    <Flex
      width={"90%"}
      py={10}
      m="auto"
      direction={{ base: "column", md: "row" }}
    >
      <Box onClick={goBack} display={{ base: "block", md: "none" }}>
        <ArrowLeftIcon />
        {" Go back"}
      </Box>
      <Sidebar linkEndPoint={route} />
      <Flex
        width={{ base: "100%", md: "900px" }}
        alignItems="center"
        gap={4}
        direction={"column"}
        paddingLeft={20}
      >
        <Heading size={"lg"}>No Orders Here</Heading>
        <Text color="gray.400" mb={10}>
          You Have Not Placed any orders yet
        </Text>
        <Image
          src="https://ii1.pepperfry.com//images/svg/w21-empty-orders-img.svg"
          width={400}
          height={400}
          alt="Section Image"
        />
        <Link href="/">
          <Button bg="brand.800" marginTop={20} rounded={"none"}>
            Continue Shopping
          </Button>
        </Link>
      </Flex>
    </Flex>
  ) : (
    <Container maxW={"1200px"}>
      <br />
      <Heading textAlign="center">My Orders</Heading>
      <br />
      {history.map((el) => (
        <Flex
          bgColor={"gray.100"}
          flexWrap={"wrap"}
          key={el.name}
          align="top"
          p="20px"
          m="20px"
          gap="20px"
          as={Link}
          to={`/furniture/products/productid/${el.id}`}
        >
          <Image src={el.image} alt={el.name} w="300px" />
          <Stack justify={"space-between"} fontSize="25px" maxW="800px">
            <Text fontWeight={"bold"}>{el.name}</Text>
            <Text>CATEGORY: {el.category || "furniture"}</Text>
            <Text>TYPE: {el.type}</Text>
            <Text>PRICE: {el.price}</Text>
            <Text>RATINGS: {el.rating || 3.5} </Text>
          </Stack>
        </Flex>
      ))}
    </Container>
  );
};

export default Orders;
