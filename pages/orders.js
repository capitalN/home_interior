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
  Grid,
  Divider,
  GridItem
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { useEffect } from "react";
import { useState } from "react";
import Section1 from "@/components/CheckoutComponents/Section1";
// import Link from "next/link";

const Orders = () => {
  const loginStore = useSelector((store) => store.loginManager);
  const route = useRouter();
  const goBack = () => {
    route;
  };

  const [history, setHistory] = useState([]);

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem("history")) || [];
    setHistory(storage);
  }, []);

  const RemoveData = (id)=>{
    setHistory(()=>history?.filter((el)=>el.id!==id));
    let data = history?.filter((el)=>el.id!==id)
    localStorage.setItem("history",JSON.stringify(data))
  }

  return !history.length ? (
    <Flex
      gap="0.5rem"
      width={"75%"}
      m="auto"
      p="0.5rem 1.5rem"
      mb="7rem"
      mt="4rem"
      direction={{ base: "column", md: "row" }}
    >
      <Box flex="1.374" position="sticky" top="0rem" height="40%">
        <Sidebar linkEndPoint={route} />
      </Box>
      <Flex
        flex="4"
        width={{ base: "100%", md: "900px" }}
        alignItems="center"
        // border="1px solid red"
        gap={4}
        direction={"column"}
      >
      <Flex direction="column" justifyContent="center" alignItems="center">
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
        
          <Button bg="brand.800" onClick={()=>route.push("/")} marginTop={20} rounded={"none"}>
            Continue Shopping
          </Button>
     
      </Flex>
      </Flex>
    </Flex>
  ) : (
    <Flex   width={"75%"}
    p="0.5rem 1.5rem"
    m="auto"
    mb="7rem"
    mt="4rem"
    >
      <Flex>
      <Box flex="1.4" position="sticky" top="0rem" height="40%">
        <Sidebar linkEndPoint={route} />
      </Box>
      <Box flex="4">
      <br />
      <Heading textAlign="center">My Orders</Heading>
      <br />
      {history?.map((item) => <Section1 key={item.id} {...item} />) && (
              <Grid gap={"30px"} templateColumns="repeat(2, 1fr)">
                {history.map((product) => (
                  <GridItem key={product.id} borderLeft="5px solid orange" p={2}>
                    <HStack gap={"5px"}>
                      <Image src={product.image} w="35%" p={"5px"} />
                      <Stack>
                        <HStack justify={"space-between"}>
                          <Text fontSize={"12px"} color="gray.500">{product.categories}</Text>
                          <Link
                              fontSize="xs"
                              color="white"
                              px={1}
                              py={0.8}
                              bg="red.300"
                            onClick={() =>
                             {
                              RemoveData(product.id);
                             }
                            }
                          >
                            Remove
                          </Link>
                        </HStack>
                        <Text fontSize="16px" fontWeight="bold" color="brand.600">{product.name}</Text>
                        <Text fontWeight="bold">Price : ₹{product.price}</Text>
                      </Stack>
                    </HStack>
                    <Divider />
                  </GridItem>
                ))}
              </Grid>
            )}
      </Box>
      </Flex>
    </Flex>
  );
};

export default Orders;
