// import { SmallCloseIcon } from "@chakra-ui/icons";
import { BsCart2 } from 'react-icons/bs';

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
import style from "./Cart.module.css"


let cartButton = {backgroundColor:"black",
                  color:"white",
                  fontSize:"13.9px",
                  letterSpacing: "0.1px"
                  }
let cartButton1 = {fontSize:"13px",  letterSpacing: "0.1px"}


const Cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [ cartflag, setCartflag ] = useState({"one": false,"second":true, "three":true})

  return (
    <>
      <Button variant="ghost" ref={btnRef} colorScheme="teal" onClick={onOpen} position="fixed" top="0px" right="0px">
      <BsCart2 size={30}  />
      </Button>
      <Drawer
        size={{base:"",sm:"md",md:"md"}}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader style={{ padding: "0px" } }
             >
            <Flex
              color="white"
              bgColor="black"
              direction="column"
              gap="2rem"
              padding="1rem 0rem 0rem"
              
            >
              <Flex alignItems="center">
                <Flex gap="1rem" justifyContent="center" alignItems="center">
                  <Text className={style.mycart} >
                    Showing Availability At{" "}
                  </Text>
                  <Input
                    width="30%"
                    className={style.mycart}
                    placeholder="pin number"
                  />
                  <Text className={style.mycart} >
                    Check
                  </Text>
                </Flex>
                <Flex
                  style={{ width: "1.5rem",
                           height: "1.5rem" }}
                  justifyContent="center"
                  alignItems="center"
                >
                  <DrawerCloseButton />
                  {/* <SmallCloseIcon /> */}
                </Flex>
              </Flex>
              <Flex color="black"   
                    justifyContent="space-around"
                    gap="3rem">
                <Button borderRadius="0.4rem 0.4rem 0rem 0rem" 
                        onClick={()=>setCartflag({...cartflag,"one":false,"second":true,"three":true})}
                        
                        style={cartflag.one?cartButton:cartButton1}
                        >
                  MY CART{" "}
                  <span
                    style={{
                            backgroundColor: "orange",
                            borderRadius: "1rem",
                            width: "1.3rem",
                            height: "1.3rem",
                            marginLeft: "0.5rem",
                         }}
                  >
                    0
                  </span>
                </Button>
                <Button borderRadius="0.4rem 0.4rem 0rem 0rem" 
        
                        onClick={()=>setCartflag({...cartflag,"one":true,"second":false,"three":true})}
                        style={cartflag.second?cartButton:cartButton1}
                       >
                  MY WISHLIST{" "}
                  <span
                    style={{
                      backgroundColor: "orange",
                      borderRadius: "1rem",
                      width: "1.3rem",
                      height: "1.3rem",
                      marginLeft: "0.5rem",
                    }}
                  >
                    0
                  </span>
                </Button>
                <Button borderRadius="0.4rem 0.4rem 0rem 0rem" 
        
                        onClick={()=>setCartflag({...cartflag,"one":true,"second":true,"three":false})}
                        style={cartflag.three?cartButton:cartButton1}
                       >
                  RECENTLY VIEWED{" "}
                  <span
                    style={{
                      backgroundColor: "orange",
                      borderRadius: "1rem",
                      width: "1.3rem",
                      height: "1.3rem",
                      marginLeft: "0.5rem",
                    }}
                  >
                    0
                  </span>
                </Button>
              </Flex>
            </Flex>
          </DrawerHeader>

          <DrawerBody>
            {
                !cartflag.one&&"Hello111"
            }
            {
                !cartflag.second&&"Hello222"
            }
            {
                !cartflag.three&&"Hello333"
            }
          {/* <Input placeholder='Type here...' /> */}</DrawerBody>

          <DrawerFooter>
            <Button
              width="100%"
              bgColor="#F16521"
              color="white"
              fontwight="300"
              _hover={{backgroundColor:"#F16521"}}
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
