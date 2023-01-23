import Section1 from "@/components/CheckoutComponents/Section1";
import Section2 from "@/components/CheckoutComponents/Section2";
import { get_cart } from "@/reducer/Cart/Cart.action";
import { Flex, Heading, Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./MainCheckout.module.css";

const MainCheckoutPage = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.cartManager.CART);

  const login = localStorage.getItem("hiUser");

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
      <Flex direction="column">
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
                  <Section1 {...item} />
                ))}
              </Box>
            </Flex>
          </Box>
          <Section2 data={data} total={priceSaved()} />
        </Flex>
      </Flex>
    </div>
  );
};

export default MainCheckoutPage;
