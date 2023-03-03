import { GetCartData } from "@/reducer/Cart/Cart.action";
import { InfoIcon } from "@chakra-ui/icons";
import {
  Flex,
  Input,
  Text,
  Image,
  Box,
  Select,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  InputRightAddon,
  Button,
  Spacer,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import style from "./Payment.module.css";

let Style = { border: "1px solid grey", backgroundColor: "white" };


export const Div1 = ({payform,GetPaymentData}) => {

  const handleOnChange = (e)=>{
    GetPaymentData(e);
  }

  return (
    <Flex direction="column" gap="1rem" style={{ width: "80%" }}>
      <Box>
        <Input name="name" onChange={handleOnChange} value={payform.name} style={Style} type="text" placeholder="Card Name" />
      </Box>
      <Flex gap="1rem">
        <Input style={Style} name="monthYear" onChange={handleOnChange} value={payform.monthYear}  type="number" min="1" max="5" placeholder="Valid Thru(MM/YY)" maxLength={5} />
        <InputGroup>
          <Input style={Style} name="cvv" onChange={handleOnChange} value={payform.cvv} placeholder="CVV" type="number" />
          <InputRightElement children={<InfoIcon color="black.500" />} />
        </InputGroup>
      </Flex>
      <Box>
        <Input style={Style} name="cardNumber" onChange={handleOnChange} value={payform.cardNumber} type="number" placeholder="Card Number"  min="1" max="16" />
      </Box>
    </Flex>
  );
};

export const Div2 = ({payform,GetPaymentData}) => {
     
  return<div style={{ width: "80%" }}>
    <Flex direction="column" gap="1rem">
      <Text> Pay Using Apps</Text>
      <Flex gap="2rem">
        <Flex direction="column" alignItems="center" justifyContent="center">
          <Image
            width={{ base: "1rem", sm: "2.1rem" }}
            height={{ base: "1rem", sm: "2.2rem" }}
            src="https://ii3.pepperfry.com/assets/w22-payment-gpay1.png"
          />
          <Text fontSize={{ base: "12px", sm: "1rem" }}>Google pay</Text>
        </Flex>
        <Flex direction="column" alignItems="center" justifyContent="center">
          <Image
            width={{ base: "1rem", sm: "2.3rem" }}
            height={{ base: "1rem", sm: "2.3rem" }}
            src="https://ii2.pepperfry.com/assets/w22-payment-phonepe1.png"
          />
          <Text fontSize={{ base: "12px", sm: "1rem" }}>PhonePe</Text>
        </Flex>
        <Flex direction="column" alignItems="center" justifyContent="center">
          <Image
            width={{ base: "1rem", sm: "2.3rem" }}
            height={{ base: "1rem", sm: "2.3rem" }}
            src="https://ii1.pepperfry.com/assets/w22-payment-bhim1.png"
          />
          <Text fontSize={{ base: "12px", sm: "1rem" }}>BHIM pay</Text>
        </Flex>
        <Flex direction="column" alignItems="center" justifyContent="center">
          <Image
            width={{ base: "1rem", sm: "2.3rem" }}
            height={{ base: "1rem", sm: "2.3rem" }}
            src="https://ii3.pepperfry.com/assets/w22-payment-paytm1.png"
          />
          <Text fontSize={{ base: "12px", sm: "1rem" }}>PayTM UPI</Text>
        </Flex>
      </Flex>
      <InputGroup size="sm">
        <Input style={Style} name='UPIID' onChange={(e)=>GetPaymentData(e)} value={payform.UPIID} placeholder="Enter UPI ID" />
        <InputRightAddon
          _hover={{ cursor: "pointer" }}
          style={{ border: "1px solid" }}
          children="verify"
        />
      </InputGroup>
    </Flex>
  </div>

}

  


export const Div3 = () => {


  return <Flex direction="column" gap="1rem" style={{ width: "80%" }}>
    <Flex gap="2rem">
      <Flex direction="column" justifyContent="center" alignItems="center">
        <Image
          width={{ base: "1rem", sm: "2.2rem" }}
          height={{ base: "1rem", sm: "2.2rem" }}
          src="https://ii1.pepperfry.com/assets/w22-payment-axis1.png"
        />
        <Text fontSize={{ base: "12px", sm: "1rem" }}>AXIS Bank</Text>
      </Flex>
      <Flex direction="column" justifyContent="center" alignItems="center">
        <Image
          width={{ base: "1rem", sm: "2.2rem" }}
          height={{ base: "1rem", sm: "2.2rem" }}
          src="https://ii1.pepperfry.com/assets/w22-payment-hdfc1.png"
        />
        <Text fontSize={{ base: "12px", sm: "1rem" }}>HDFC Bank</Text>
      </Flex>
      <Flex direction="column" justifyContent="center" alignItems="center">
        <Image
          width={{ base: "1rem", sm: "2.2rem" }}
          height={{ base: "1rem", sm: "2.2rem" }}
          src="https://ii1.pepperfry.com/assets/w22-payment-icici1.png"
        />
        <Text fontSize={{ base: "12px", sm: "1rem" }}>ICICI Bank</Text>
      </Flex>
      <Flex direction="column" justifyContent="center" alignItems="center">
        <Image
          width={{ base: "1rem", sm: "2.2rem" }}
          height={{ base: "1rem", sm: "2.2rem" }}
          src="https://ii2.pepperfry.com/assets/w22-payment-sbi1.png"
        />
        <Text fontSize={{ base: "12px", sm: "1rem" }}>State Bank of India</Text>
      </Flex>
    </Flex>
    <Select style={Style}>
      <option>Choose Other Bank</option>
      <option>Airtel Payment Bank</option>
      <option>Andra Bank</option>
      <option>Bank on India</option>
      <option>Bank of Badodha</option>
      <option>Maharasta Bank</option>
      <option>KDC Bank</option>
    </Select>
  </Flex>
}

export const Div4 = () => (
  <Box width={{ base: "100%", sm: "90%", md: "80%" }} style={{ width: "80%" }}>
    <Flex direction="column" gap="1rem" justifyContent="center">
      <Flex alignItems="center">
        <Box>
          <Text>EMI Credit Card</Text>
          <Text>All Major Indian Banks. No Cost on 3/6 Months</Text>
        </Box>
        <Spacer />
        <AiOutlinePlus />
      </Flex>
      <Flex alignItems="center">
        <Box>
          <Text>EMI Debit Card</Text>
          <Text>All Major Indian Banks</Text>
        </Box>
        <Spacer />
        <AiOutlinePlus />
      </Flex>
      <Flex alignItems="center">
        <Box>
          <Text>Pay Later</Text>
          <Text>Pay Now using Zestmoney</Text>
        </Box>
        <Spacer />
        <AiOutlinePlus />
      </Flex>
    </Flex>
  </Box>
);

export const Div5 = ({cardData,payform,GetPaymentData}) => (
  <Flex gap="1rem" direction="column" style={{ width: "80%" }}>
    <Box>
      <Input type="password" name="cardNumber" onChange={(e)=>GetPaymentData(e)} value={payform.cardNumber} style={Style} placeholder="Card Number" />
    </Box>
    <Box>
      <Input type="password" name="cardPassword" onChange={(e)=>GetPaymentData(e)} value={payform.cardPassword} maxLength={10} style={Style} placeholder="Card PIN" />
    </Box>
    <Box border="1px solid orange" borderRadius="0.3rem" textAlign="center"  onClick={cardData}>
      <Button
        m="auto"
       
        _hover={{ backgroundColor: "white" }}
        bgColor="white"
        color="orange"
      >
        Verify
      </Button>
    </Box>
  </Flex>
);
