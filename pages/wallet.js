import Sidebar from "@/components/accountPage/sidebar";
import { Box, Button, Divider, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";

const Wallet = () => {
  const loginStore = useSelector((store) => store.loginManager);
  const { route } = useRouter();
  return (
    <Flex width={"90%"} py={10} m="auto">
      <Sidebar linkEndPoint={route} />
      <Stack
        width={{base: "100%", md: "900px"}}
        alignItems="center"
        gap={8}
        direction={"column"}
        paddingLeft={20}
      >
        <Flex justifyContent={"space-between"} width="100%">
          <Box>
            <Flex gap={5}>
              <Image
                src="https://ii1.pepperfry.com/images/svg/ma-wall-trans-icon.svg"
                width={40}
                height={40}
              />
              <Stack>
                <Heading size={"md"}>Total Balance</Heading>
                <Heading size={"md"}>₹ 5,000</Heading>
              </Stack>
            </Flex>
          </Box>
          <Box>
            <Stack>
              <Text fontSize={"lg"}>Order Refunds</Text>
              <Heading size={"md"}>₹ 0</Heading>
            </Stack>
          </Box>
          <Box>
            <Stack>
              <Text>Pepperfry Credits :</Text>
              <Text
                as="span"
                color="green.300"
                fontWeight={"bold"}
                fontSize="lg"
              >
                5000
              </Text>
              <Text as="span" color="gray.400" fontSize="sm">
                (1 Credit = 1 Rupee)
              </Text>
            </Stack>
          </Box>
        </Flex>
        <Box>
          <Image
            src={
              "https://ii1.pepperfry.com/media/wysiwyg/banners/Web_Promo_Wallet_2X_2001_r1.jpg"
            }
            width={900}
            height={80}
            alt="banner"
          />
        </Box>
        <Box textAlign="left" width="100%">
          <Heading size={"md"}>How It Works?</Heading>
        </Box>
        <Box w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Stack>
              <Image
                src="https://ii1.pepperfry.com/images/svg/ma-hw-csh-beni-icon.svg"
                width={40}
                height={40}
              />
              <Text fontSize="xs" fontWeight="bold">1. Enjoy Cashback Benefits</Text>
            </Stack>
            <Stack>
              <Image
                src="https://ii1.pepperfry.com/images/svg/ma-hw-csh-refund-icon.svg"
                width={32}
                height={32}
              />
              <Text fontSize="xs" fontWeight="bold">2. Avail Instant Refund</Text>
            </Stack>
            <Stack>
              <Image
                src="https://ii1.pepperfry.com/images/svg/ma-hw-csh-offer-icon.svg"
                width={45}
                height={45}
              />
              <Text fontSize="xs" fontWeight="bold">3. Get Exclusive Offers</Text>
            </Stack>
            <Stack>
              <Image
                src="https://ii1.pepperfry.com/images/svg/ma-hw-csh-check-icon.svg"
                width={25}
                height={25}
              />
              <Text fontSize="xs" fontWeight="bold">4. Enjoy Seamless Checkout</Text>
            </Stack>
          </Flex>
        </Box>
        <Divider colorScheme="black"/>
      </Stack>
    </Flex>
  );
};

export default Wallet;
