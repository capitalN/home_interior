// import { SmallCloseIcon } from "@chakra-ui/icons";
import { BsCart2 } from "react-icons/bs";

import { useDisclosure, RadioGroup } from "@chakra-ui/react";
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
import { useSelector } from "react-redux";
import Section1 from "./CheckoutComponents/Section1";

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
  const data = useSelector((store) => store.cartManager.Data);

  return (
    <>
      {/* <Button variant="ghost" ref={btnRef} colorScheme="teal" onClick={onOpen} position="fixed" top="0px" right="0px">
      <BsCart2 size={30}  />
      </Button> */}
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
                  {/* <SmallCloseIcon /> */}
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
              <Text color="red" textAlign="center" width="90%" margin="auto">
                Make your Cart
              </Text>
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
            {/* <Input placeholder='Type here...' /> */}
          </DrawerBody>

          <DrawerFooter>
            <Button
              width="100%"
              bgColor="#F16521"
              color="white"
              fontwight="300"
              _hover={{ backgroundColor: "#F16521" }}
            >
              PROCEED TO PAY SECURELY
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Cart;
