import { GetCartData, get_cart } from "@/reducer/Cart/Cart.action";
import { InfoIcon } from "@chakra-ui/icons";
import { Image, Flex, Text, Spacer, Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { usePaymentHook, CardArray } from "../hook/usePaymentHook";
import { Div1, Div2, Div3, Div4, Div5 } from "./SmallComponents";

const PaymentSection1 = ({cardData,payform,GetPaymentData}) => {
  const { flag, handleNavi } = usePaymentHook();
  const data = useSelector((store) => store.cartManager.CART);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_cart());
  }, []);

  const handlePrice = () => {
    let sum = 0;
    for (let i = 0; i < data?.length; i++) {
      const { price, discount,count } = data[i];
      sum = sum + Math.floor((price - (price * discount) / 100)*count + 1836);
    }
    return sum;
  };

  return (
    <div flex="2" style={{ width: "85%", margin: "auto" }}>
      {CardArray?.map((item, i) => {
        const { id, text, img } = item;
        return (
          <Box>
            <Flex
              justifyContent="center"
              borderBottom="1px solid rgb(181, 181, 181)"
              key={id}
              p="0.3rem"
              alignItems="center"
              onClick={() => handleNavi(id)}
            >
              <Flex
                gap="1rem"
                p="0.7rem 0.2rem"
                alignItems="center"
                justifyContent="center"
              >
                <Image src={img} alt={id} />
                <Text fontSize={{ base: "0.8rem", sm: "1rem", md: "1.2rem" }}>
                  {text}
                </Text>
              </Flex>
              <Spacer />
              <Box>
                {!flag[id] ? (
                  <BsChevronDown />
                ) : flag[id] ? (
                  <BsChevronUp />
                ) : (
                  <InfoIcon />
                )}
              </Box>
            </Flex>
            <Box
              p="1rem 0rem"
              borderBottom="1px solid grey"
              display={!flag[id] ? "none" : "block"}
            >
              {flag.a ? (
                <Div1 payform={payform} GetPaymentData={GetPaymentData}/>
              ) : flag.b ? (
                <Div1 payform={payform} GetPaymentData={GetPaymentData}/>
              ) : flag.c ? (
                <Div2 payform={payform} GetPaymentData={GetPaymentData}/>
              ) : flag.d ? (
                <Div3/>
              ) : flag.f ? (
                <Text>You have no wallet balance</Text>
              ) : flag.e ? (
                <Div4 />
              ) : flag.g ? (
                <Div5 cardData={cardData} payform={payform} GetPaymentData={GetPaymentData}/>
              ) : (
                <Div1 payform={payform} GetPaymentData={GetPaymentData}/>
              )}
            </Box>
          </Box>
        );
      })}
    </div>
  );
};
// const arr = [`<PaymentSection1/>`];
// console.log(arr);

export default PaymentSection1;
