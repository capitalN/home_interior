import { InfoIcon } from "@chakra-ui/icons";
import { Spacer } from "@chakra-ui/react";
import { Flex, Heading, Image, Text, Checkbox, Box } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { useToast } from "@chakra-ui/react";
import { useSelector } from "react-redux";
const SfontSize = {
  fontSize: "12px",
};
const mediumfontSize = {
  fontSize: "14px",
  padding: "0.5rem",
};

const BfontSize = {
  fontSize: "16px",
};
const VeryBfontSize = {
  fontSize: "20px",
};

const border = { border: "1px solid grey" };

const getNameintolocalStorage = () => {
  try {
    let locVal = JSON.parse(localStorage.getItem("hiUsers")) || [];
    return locVal;
  } catch (e) {
    console.log(e);
  }
};

const Section2 = ({ val1, flagg, total, data,MakePayment }) => {
  const val = val1 === "none" ? "none" : "flex";
  const flag = flagg === "true" ? "PAY NOW" : "PROCEED TO PAY";
  const router = useRouter();
  const [local, setLocal] = useState(null);
  const toast = useToast();
  const loginStore = useSelector((store) => store.loginManager);

  useEffect(() => {
    if (getNameintolocalStorage().length > 0) {
      setLocal(getNameintolocalStorage()[0].name);
    }
  }, [local]);

  const handlePrice = () => {
    let sum = 0;
    for (let i = 0; i < data?.length; i++) {
      const { price, discount,count } = data[i];
      sum = sum + Math.floor((price - (price * discount) / 100)*count + 1836) ;
    }
    return sum;
  };
  const handlePay = () => {
    if (flagg) {

      for(let i=0; i<data.length; i++)
      {
        let id = data[i].id
        axios.delete(`https://home-interior.onrender.com/cart/${id}`)
      }

      MakePayment();
      router.push("/")
      setTimeout(() => {
        toast({
          title: "payment successfull",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      }, 4000);

      toast({
        title: "processing",
        status: "warning",
        duration: 4000,
        isClosable: true,
      });
    } else {
      router.push("/Payment");
    }
  };

  return (
    <Flex direction="column" flex="1" gap="1rem">
      <Flex alignItems="center">
        <Text style={SfontSize}>Delivering To</Text>
        <Spacer />
        <Text display={val} color="#FF7035" style={mediumfontSize}>
          <b>Change</b>
        </Text>
      </Flex>
      <Flex gap="-0.8rem" style={border} direction="column">
        <Text style={mediumfontSize}>
          <b>{local && local} </b>
          HOME
        </Text>
        <Text style={mediumfontSize}>
          <span>abc road,</span>bindu chowk,<span></span>
          <span>kolhapaur,</span>
          <span>Mahararastra</span>
          <span>416120</span>
        </Text>
      </Flex>
      <Flex display={val} alignItems="center" border="1px solid grey" p="5px">
        <Flex display={val} alignItems="center">
          <Image src="https://ii2.pepperfry.com/assets/w22-coupon-card-icon.svg" />
          <Text style={SfontSize} ml="0.5rem">
            Apply Coupon
          </Text>
        </Flex>
        <Spacer />
        <MdNavigateNext />
      </Flex>
      <Flex direction="column" border="1px solid grey" p="5px">
        <Text style={VeryBfontSize} textAlign="center">
          Cart Summary
        </Text>
        <Flex>
          <Text style={mediumfontSize}>Items In Cart</Text>
          <Spacer />
          <Text style={mediumfontSize} as="span">
            {data?.length}
          </Text>
        </Flex>
        <Flex>
          <Text style={mediumfontSize}>Cart Total Price</Text>
          <Spacer />
          <Text style={mediumfontSize} as="span">
            ₹ <span>{handlePrice()}</span>
          </Text>
        </Flex>
        <Flex display={val} alignItems="center">
          <Flex alignItems="center">
            <Checkbox size="lg" colorScheme="orange"></Checkbox>
            <Text display={val} style={mediumfontSize}>
              Save the Environment, Plant a Tree
            </Text>
            <InfoIcon />
          </Flex>
          <Spacer />
          <Text style={mediumfontSize}>₹0</Text>
        </Flex>
        <Flex alignItems="center">
          <Flex alignItems="center">
            <Checkbox size="lg" colorScheme="orange" defaultChecked></Checkbox>
            <Text color="#1979B5" style={mediumfontSize}>
              Redeem Cashback Credits
            </Text>
            <InfoIcon color="#1979B5" />
          </Flex>
          <Spacer />
          <Text color="#1979B5" style={mediumfontSize}>
            -₹2,000
          </Text>
        </Flex>
        <Flex>
          <Flex
            style={BfontSize}
            alignItems="center"
            justifyContent="center"
            as="b"
          >
            <Text mr="0.6rem">YOU PAY</Text>
            <Text ml="0.3rem" style={SfontSize}>
              (Inclusive of All Taxes)
            </Text>
          </Flex>
          <Spacer />
          <Heading fontSize="0.9rem" as="b">
            ₹{handlePrice()}
          </Heading>
        </Flex>
        <Flex display={val}>
          <Text style={SfontSize} color="#67AD5B">
            You Saved
          </Text>
          <Spacer />
          <Text color="#67AD5B">₹{total}</Text>
        </Flex>
      </Flex>
      <Flex display={val}>
        <Text>Use GSTIN For Business Purchase (Optional)</Text>
        <Spacer />
        <MdNavigateNext />
      </Flex>
     
     {
      loginStore && loginStore.login?<Flex
        _hover={{ cursor: "pointer", color: "green" }}
        backgroundColor="#FF7035"
        color="white"
        onClick={handlePay}
        justifyContent="center"
        height="2.5rem"
        alignItems="center"
      >
        {flag}
      </Flex>:<Flex
        _hover={{ cursor: "pointer", color: "green" }}
        backgroundColor="#FF7035"
        color="white"
        // onClick={}
        justifyContent="center"
        height="2.5rem"
        alignItems="center"
      >
        Proceed to login
      </Flex>
     }
      
    </Flex>
  );
};

export default Section2;
