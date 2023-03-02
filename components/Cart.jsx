// import { SmallCloseIcon } from "@chakra-ui/icons";
import { BsCart2 } from "react-icons/bs";

import {
  useDisclosure,
  RadioGroup,
  VStack,
  HStack,
  Stack,
  Box,
  Select,
  Divider,
  Image,
} from "@chakra-ui/react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerCloseButton,
  Input,
  DrawerFooter,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import style from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import Section1 from "./CheckoutComponents/Section1";
import { useEffect } from "react";
import { delete_from_cart, get_cart } from "@/reducer/Cart/Cart.action";
import Link from "next/link";

let cartButton = {
  backgroundColor: "black",
  color: "white",
  fontSize: "13px",
  letterSpacing: "0.1px",
  lineHeight: "0px",
};
let cartButton1 = {
  fontSize: "13px",
  letterSpacing: "0.1px",
  lineHeight: "0px",
};

const Cart = ({ setDrawer, drawer }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [cartflag, setCartflag] = useState({
    one: false,
    second: true,
    three: true,
  });
  const data = useSelector((store) => store.cartManager.CART);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_cart());
  }, []);

  return (
    <>
      <Drawer
        size={{ base: "sm", sm: "md", md: "md" }}
        isOpen={onOpen}
        placement="right"
        onClose={drawer && onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader style={{ padding: "0px" }}>
            <Flex
              color="white"
              bgColor="black"
              direction="column"
              gap="2rem"
              padding="1rem 0rem 0rem"
            >
              <Flex alignItems="center">
                <Flex gap="1rem" justifyContent="center" alignItems="center">
                  <Text className={style.mycart}>Showing Availability At </Text>
                  <Input
                    width="30%"
                    className={style.mycart}
                    placeholder="pin number"
                  />
                  <Text className={style.mycart}>Check</Text>
                </Flex>
                <Flex
                  style={{ width: "1.5rem", height: "1.5rem" }}
                  justifyContent="center"
                  alignItems="center"
                >
                  <DrawerCloseButton onClick={() => setDrawer(!drawer)} />
                </Flex>
              </Flex>
              <Flex
                color="black"
                justifyContent="space-around"
                gap="1rem"
                m="0rem 1rem"
              >
                <Button
                  borderRadius="0.4rem 0.4rem 0rem 0rem"
                  flex="1"
                  onClick={() =>
                    setCartflag({
                      ...cartflag,
                      one: false,
                      second: true,
                      three: true,
                    })
                  }
                  style={cartflag.one ? cartButton : cartButton1}
                  width="95%"
                >
                  <Text width="95%"> MY CART </Text>
                  <Text
                    as="span"
                    //  display="none"
                    style={{
                      backgroundColor: "orange",
                      borderRadius: "1rem",
                      width: "30%",
                      height: "1.3rem",
                      marginLeft: "0.5rem",
                      lineHeight: "1.2rem",
                    }}
                  >
                    {data.length}
                  </Text>
                </Button>
                <Button
                  borderRadius="0.4rem 0.4rem 0rem 0rem"
                  flex="1.1"
                  onClick={() =>
                    setCartflag({
                      ...cartflag,
                      one: true,
                      second: false,
                      three: true,
                    })
                  }
                  style={cartflag.second ? cartButton : cartButton1}
                >
                  <Text width="80%">MY WISHLIST </Text>

                  <Text
                    as="span"
                    display="block"
                    style={{
                      backgroundColor: "orange",
                      borderRadius: "1rem",
                      width: "30%",
                      height: "1.3rem",
                      marginLeft: "0.5rem",
                      lineHeight: "1.2rem",
                    }}
                  >
                    0
                  </Text>
                </Button>
                <Button
                  borderRadius="0.4rem 0.4rem 0rem 0rem"
                  flex="1.4"
                  onClick={() =>
                    setCartflag({
                      ...cartflag,
                      one: true,
                      second: true,
                      three: false,
                    })
                  }
                  style={cartflag.three ? cartButton : cartButton1}
                >
                  <Text width="74%"> RECENTLY VIEWED </Text>

                  <Text
                    as="span"
                    display="block"
                    style={{
                      backgroundColor: "orange",
                      borderRadius: "1rem",
                      width: "30%",
                      height: "1.3rem",
                      marginLeft: "1rem",
                      lineHeight: "1.2rem",
                    }}
                  >
                    0
                  </Text>
                </Button>
              </Flex>
            </Flex>
          </DrawerHeader>

          <DrawerBody>
            {!cartflag.one && data?.map((item) => <Section1 {...item} />) && (
              <VStack gap={"5px"}>
                {data.map((product) => (
                  <Box key={product.id}>
                    <HStack gap={"5px"}>
                      <Image src={product.image} w="35%" p={"5px"} />
                      <Stack>
                        <HStack justify={"space-between"}>
                          <Text>{product.categories}</Text>
                          <button
                            onClick={() =>
                              dispatch(delete_from_cart(product.id))
                            }
                          >
                            Remove
                          </button>
                        </HStack>
                        <Text fontSize="20px">{product.name}</Text>
                        <Text>Price : ₹ {product.price}</Text>
                      </Stack>
                    </HStack>
                    <Divider />
                  </Box>
                ))}
              </VStack>
            )}
            {!cartflag.second && (
              <Text color="red" textAlign="center" width="90%" margin="auto">
                Make your Wishlist
              </Text>
            )}
            {!cartflag.three && (
              <Text color="red" textAlign="center" width="90%" margin="auto">
                No Recent view
              </Text>
            )}
          </DrawerBody>

          <DrawerFooter>
            <Link href="/Checkout">
              <Button
                width="100%"
                bgColor="#F16521"
                color="white"
                fontwight="300"
                _hover={{ backgroundColor: "#F16521" }}
                onClick={() => setDrawer(!drawer)}
              >
                PROCEED TO PAY SECURELY
              </Button>
            </Link>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Cart;
