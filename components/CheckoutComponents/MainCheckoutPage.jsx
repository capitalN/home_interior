import Section1 from "@/components/CheckoutComponents/Section1";
import Section2 from "@/components/CheckoutComponents/Section2";
import { get_cart } from "@/reducer/Cart/Cart.action";
import { Flex, Heading, Box, Text, Image, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./MainCheckout.module.css";

const MainCheckoutPage = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.cartManager.CART);
  const login = localStorage.getItem("hiUser");
  const router = useRouter();
  const refreshpg = () => {
    router.replace(router.asPath);
  };

  useEffect(() => {
    dispatch(get_cart());
  }, [login]);

  const priceSaved = () => {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      sum = sum + ((data[i].price * data[i].discount) / 100) * data[i].count;
    }
    return Math.floor(sum);
  };

  return (
    <div>
    {
      data.length>0? <Flex direction="column">
        <Flex p="1rem" width="80%" m="auto">
          <Heading as="h3" fontSize={17}>
            Your Cart {data.length && data.length} (Items)
          </Heading>
        </Flex>
        <Flex
          width="85%"
          p="1rem"
          direction={{ base: "column-reverse", md: "row" }}
          gap="1rem"
          m="auto"
        >
          <Box flex="1.5">
            <Flex direction="column" justifyContent="center">
              <Text
                bgColor="#F0F7EF"
                color="#67AD5B"
                textAlign="center"
                mb="0.5rem"
                p="0.6rem"
              >
                You saved <b>₹ {priceSaved()}</b> On This Order
              </Text>
            </Flex>
            <Flex>
              <Box
                height="30rem"
                width="100%"
                overflowY="scroll"
                g
                className={style.checkout}
              >
                {data?.map((item) => (
                  <Section1 key={item.id} {...item} />
                ))}
              </Box>
            </Flex>
          </Box>
          <Section2 data={data} total={priceSaved()} />
        </Flex>
      </Flex>:
      <Flex p="1rem" direction="column" gap="1rem"  width="70%"  m="4rem auto" 
      // border="1px solid green"
      >
        <Heading textAlign="center" fontSize={{base:"0.8rem",sm:"1rem",md:"1.35rem"}} as="h2">Oops!</Heading>
        <Heading textAlign="center" fontSize={{base:"0.8rem",sm:"1rem",md:"1.35rem"}} as="h1">Nothing To See Here.</Heading>
        <Image w={{base:"100%",sm:"80%",md:"30%"}} height={{base:"100%",sm:"80%",md:"30%"}} m="auto" textAlign="center" src="https://ii3.pepperfry.com/assets/w22-checkout-empty-cart1.png"/>
        <Heading as="h3" textAlign="center" fontSize={{base:"0.8rem",sm:"1rem",md:"1.35rem"}}>Can I Take Your Order?</Heading>
        <Button
                backgroundImage="linear-gradient(180deg,rgba(246,77,24,.99) 0%,#FF7035 100%);"
                colorScheme="white" 
                fontSize={{base:"0.5rem",sm:"0.8rem",md:"1rem"}}
                width={{base:"65%",sm:"50%",md:"20%"}}
                m="auto"
                textAlign="center"
                onClick={() => {router.push("/")}}
              >
                Continue Shopping
              </Button>
      </Flex>
    }
      
    </div>
  );
};

export default MainCheckoutPage;
