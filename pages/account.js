import Sidebar from "@/components/accountPage/sidebar";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  Input,
  DrawerFooter,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiEditAlt } from "react-icons/bi";
import { BsCalendar3 } from "react-icons/bs";
import { ImMobile } from "react-icons/im";
import { MdOutlineMail } from "react-icons/md";
import {
  loginSuccess,
  logoutUser,
} from "@/reducer/AuthReducer/LoginAuth/loginActions";
import useDrawerHook from "@/components/hook/drawerHook";

const BreakpointsInAccount = (base = 10, sm = 12, md = 16) => {
  return { base: `${base}px`, sm: `${sm}px`, md: `${md}px` };
};

const styleForInfo = {
  color: "5B5B5B",
  fontSize: "15px",
  p: "0px 6px",
  fontFamily: "Manrope, sans-serif",
  textAlign: "left",
};

const styleForInfoo = {
  color: "5B5B5B",
  fontSize: "15px",
  p: "0px 6px",
  fontFamily: "Manrope, sans-serif",
  textAlign: "right",
};

const formdata = {
  name: "",
  email: "",
};

const takeVal = (val) => {
  try {
    const data = JSON.parse(localStorage.getItem("hiUser")) || {};
    // console.log(data)
    let value = {};
    const { details } = data;
    value = { ...details, name: val.name, mobile: val.mobile };
    let new_val = { ...data, details: value };
    localStorage.setItem("hiUser", JSON.stringify(new_val));
    return new_val;
  } catch (err) {
    console.log(err);
  }
};


const AddressData = {
  pincode:"938472",
  address1 : "Mg Road",
  address2:"BinduChowk",
  city:"Kolhapur",
  state:"Maharashta",
  country:"India"
}






const userAccount = () => {

  const dispatch = useDispatch();
  const loginStore = useSelector((store) => store.loginManager);
  const route = useRouter();
  const [isOpen1, onOpen1, onClose1] = useDrawerHook();
  const [isOpen2, onOpen2, onClose2] = useDrawerHook();
  const [isOpen3, onOpen3, onClose3] = useDrawerHook();
  const btnRef = React.useRef();
  const [formdata, setFormdata] = useState({});
  const toast = useToast();
  const [addressform, setAddressform] = useState(AddressData)

  useEffect(() => {
    dispatch(loginSuccess());
  }, [formdata, dispatch]);

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleChangeforAdress = (e) => {
    setAddressform({ ...addressform, [e.target.name]: e.target.value });
  };

  const handleClickDelete = ()=>{
    setAddressform(()=>AddressData)
  }

  const handleClick = () => {
    if (formdata.name && formdata.mobile) {
      let data = takeVal(formdata);
      dispatch(loginSuccess(data));
      toast({
        position: "top",
        title: "Data updated",
        status: "success",
        duration: 1000,
        isClosable: true,
      });
      setTimeout(() => {
        location.reload();
      }, 2000);
    } else if (formdata.name) {
      alert("Please provide your mobile number");
    } else {
      alert("Please provide your name");
    }
  };


  const handleClick1 = () => {
    alert("Data has been updated");
  };

  let user = null;
  try {
    user = JSON.parse(localStorage.getItem("hiUser"));
  } catch (error) {}

  if (!loginStore.login) {
    try {
      localStorage.removeItem("hiUser");
      route.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Flex
      gap="0.5rem"
      width={"75%"}
      m="auto"
      p="0.5rem 1.5rem"
      mb="7rem"
      mt="4rem"
      // border="1px solid red"
    >
      <Box flex="1.4" position="sticky" top="0rem" height="40%">
        <Sidebar linkEndPoint={route} />
      </Box>
      <Box flex="4">
        <Box
          borderRadius="0.2rem"
          boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
          p="1rem"
          pb="1.6rem"
        >
          <Flex
            justifyContent="space-between"
            p="0rem 2rem"
            m="0rem 0rem 1.3rem"
          >
            <Text
              as="b"
              color="#121212"
              fontSize={BreakpointsInAccount(17, 17, 17)}
              fontFamily="Manrope, sans-serif"
            >
              My Details
            </Text>
            <Button
              variant="ghost"
              color="#FF7035"
              fontWeight="500"
              textAlign="right"
              ref={btnRef}
              onClick={onOpen1}
              p="0px"
            >
              Edit
            </Button>
          </Flex>
          <Flex p="0rem 2rem" direction="column" gap="1.8rem">
            <Flex justifyContent="space-between">
              <Text style={styleForInfo}>Name</Text>
              <Text style={styleForInfoo} textAlign="right">
                {loginStore.details.name}
              </Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Text style={styleForInfo}>Mobile Number</Text>
              <Text style={styleForInfoo} textAlign="right">
                {loginStore.details.mobile}
              </Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Text style={styleForInfo}>Email ID</Text>
              <Text style={styleForInfoo} textAlign="right">
                {loginStore.details.email}
              </Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Text style={styleForInfo}>Date of Birth</Text>
              <Text style={styleForInfoo} textAlign="right">
                1/5/98
              </Text>
            </Flex>
          </Flex>
        </Box>
        <Box
          position="relative"
          borderRadius="0.2rem"
          boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
          mt="0.7rem"
          p="1rem"
        >
          <Text
            p="1rem 2rem"
            color="#121212"
            as="b"
            fontSize={BreakpointsInAccount(17, 17, 17)}
            fontFamily="Manrope, sans-serif"
          >
            Default Address
          </Text>
          <Flex
            p="0rem 2rem"
            mt="1rem"
            pb="4rem"
            direction="column"
            gap="0.8rem"
          >
            <Flex gap="0.2rem">
              <Text fontSize={15} color="#121212">
                {loginStore.details.name}
              </Text>
              <Text fontSize={15} color="#848484">
                HOME
              </Text>
            </Flex>
            <Text fontSize={15} color="#121212">
             {addressform.address1}
            </Text>
            <Text fontSize={15} color="#121212">
            {addressform.address2}
            </Text>
            <Text fontSize={15} color="#121212">
            {addressform.city + " " + "-" + " " + addressform.pincode }
            </Text>
            <Text fontSize={15} color="#121212">
              89765
            </Text>
            <Button
              width="5rem"
              leftIcon={<BiEditAlt />}
              border="1px solid rgba(190, 190, 190,0.9)"
              colorScheme="rgba(213, 210, 210,0.5)"
              variant="outline"
              visibility={{base:"hidden",md:"visible"}}
              onClick={onOpen2}
            >
              Edit
            </Button>
          </Flex>
          <Flex
            gap="0.5rem"
            mt="1.7rem"
            position="absolute"
            bottom="1rem"
            right="1rem"
            width="70%"
            mr="auto"
            direction={{ base: "column", sm: "column", md: "row" }}
            justifyContent="right"
            alignItems="center"
          >
            <Button
              fontSize={BreakpointsInAccount(12, 14, 17)}
              borderRadius="0.1rem"
              colorScheme="#FFFFFF"
              backgroundColor="#FF7035"
              variant="solid"
              onClick={onOpen3}
            >
              View All Address
            </Button>
            <Button
              fontSize={BreakpointsInAccount(12, 14, 17)}
              borderRadius="0.1rem"
              colorScheme="#FF7035"
              variant="outline"
              onClick={onOpen2}
            >
              Add New Address
            </Button>
          </Flex>
        </Box>
      </Box>




{/* ////////////// This is user drawer section //////////// */}

      <Box>
        <Drawer
          size={{ base: "sm", sm: "sm", md: "sm" }}
          isOpen={isOpen1}
          placement="right"
          onClose={onClose1}
          finalFocusRef={btnRef}
          position="relative"
        >
          <DrawerOverlay />
          <DrawerContent>
            <Box position="absolute" top="0px" left="0px">
              <DrawerCloseButton background="rgb(200,200,200)" p="0.3rem" />
            </Box>
            <DrawerHeader borderBottom="3px solid rgb(220,220,220)">
              Edit Details
            </DrawerHeader>

            <DrawerBody>
              <Flex gap="1rem" direction="column" mb="1.5rem">
                <Text>Name</Text>
                <Box>
                  <InputGroup>
                    <Input
                      type="text"
                      border="1px solid #FF7035"
                      name="name"
                      placeholder={loginStore.details.name}
                      onChange={handleChange}
                      value={formdata.name}
                      borderRadius="0.2rem"
                    />
                    <InputRightElement
                      pointerEvents="none"
                      children={<BiEditAlt color="gray.300" />}
                    />
                  </InputGroup>
                  {!formdata.name && (
                    <Text
                      fontSize={14}
                      fontFamily="Manrope, sans-serif"
                      color="#D8232A"
                    >
                      Enter Your Name
                    </Text>
                  )}
                </Box>
              </Flex>
              <Flex gap="1rem" direction="column" mb="1.5rem">
                <Text>Mobile Number</Text>
                <Box>
                  <InputGroup>
                    <Input
                      type="number"
                      name="mobile"
                      onChange={handleChange}
                      placeholder={loginStore.details.mobile}
                      value={formdata.mobile}
                      border="1px solid #FF7035"
                      borderRadius="0.2rem"
                    />
                    <InputRightElement
                      pointerEvents="none"
                      children={<ImMobile color="gray.300" />}
                    />
                  </InputGroup>
                  {!formdata.mobile && (
                    <Text
                      fontSize={14}
                      placeholder={loginStore.details.mobile}
                      fontFamily="Manrope, sans-serif"
                      color="#D8232A"
                    >
                      Enter Valid Mobile Number
                    </Text>
                  )}
                </Box>
              </Flex>
              <Flex gap="1rem" direction="column" mb="1.5rem">
                <Text>Email ID</Text>
                <InputGroup>
                  <Input
                    isDisabled
                    placeholder={loginStore.details.email}
                    border="1px solid #FF7035"
                    borderRadius="0.2rem"
                  />
                  <InputRightElement
                    pointerEvents="none"
                    children={<MdOutlineMail color="gray.300" />}
                  />
                </InputGroup>
              </Flex>
              <Flex gap="1rem" direction="column" mb="1.5rem">
                <Text>Date of Birth</Text>
                <InputGroup>
                  <Input
                    isDisabled
                    value="1/5/98"
                    border="1px solid #FF7035"
                    borderRadius="0.2rem"
                  />
                  <InputRightElement
                    pointerEvents="none"
                    children={<BsCalendar3 color="gray.300" />}
                  />
                </InputGroup>
              </Flex>
            </DrawerBody>

            <DrawerFooter mb="5rem">
              <Button
                backgroundImage="linear-gradient(180deg,rgba(246,77,24,.99) 0%,#FF7035 100%);"
                colorScheme="white"
                mt="-2rem"
                width="100%"
                textAlign="center"
                onClick={() => {
                  handleClick();
                }}
              >
                SAVE
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>



{/* ////////////////  This is user address drawer section ///////////// */}

<Box>
        <Drawer
          size={{ base: "sm", sm: "sm", md: "sm" }}
          isOpen={isOpen2}
          placement="right"
          onClose={onClose2}
          finalFocusRef={btnRef}
          position="relative"
        >
          <DrawerOverlay />
          <DrawerContent>
            <Box position="absolute" top="0px" left="0px">
              <DrawerCloseButton background="rgb(200,200,200)" p="0.3rem" />
            </Box>
            <DrawerHeader borderBottom="3px solid rgb(220,220,220)">
              Edit Details
            </DrawerHeader>

            <DrawerBody>
              <Flex gap="0.3rem" direction="column" mb="1.5rem">
                <Text>Name</Text>
                <Box>
                    <Input
                      type="text"
                      border="1px solid black"
                      _placeholder={{ color: 'black' }}

                      name="name"
                      placeholder={loginStore.details.name}
                      onChange={handleChange}
                      value={formdata.name}
                      borderRadius="0.2rem"
                    />
                </Box>
              </Flex>
              <Flex  gap="0.3rem" direction="column" mb="1.5rem">
                <Text>Mobile Number</Text>
                <Box>
                    <Input
                      type="number"
                      name="mobile"
                      border="1px solid black"
                      _placeholder={{ color: 'black' }}

                      onChange={handleChange}
                      placeholder={loginStore.details.mobile}
                      value={formdata.mobile}
                      borderRadius="0.2rem"
                    />
                </Box>
              </Flex>
              <Flex  gap="0.3rem" direction="column" mb="1.5rem">
                <Text>PIN CODE</Text>
                  <Input
                    type="number"
                    name="pincode"
                    placeholder={addressform.pincode}
                    value={addressform.pincode}
                    onChange={handleChangeforAdress}
                    border="1px solid black"
                    _placeholder={{ color: 'black' }}
                    borderRadius="0.2rem"
                  />
              </Flex>
              <Flex  gap="0.3rem" direction="column" mb="1.5rem">
                <Text>Address No 1.</Text>
                  <Input
                    name="address1"
                    value={addressform.address1}
                    onChange={handleChangeforAdress}
                    border="1px solid black"
                    _placeholder={{ color: 'black' }}
                    borderRadius="0.2rem"
                  />
              </Flex>
              <Flex  gap="0.3rem" direction="column" mb="1.5rem">
                <Text>Address No 2.</Text>
                  <Input
                    name="address2"
                    value={addressform.address2}
                    onChange={handleChangeforAdress}
                    border="1px solid black"
                    _placeholder={{ color: 'black' }}
                    borderRadius="0.2rem"
                  />
              </Flex>
              <Flex  gap="0.3rem" direction="column" mb="1.5rem">
                <Text>City</Text>
                  <Input
                    name="city"
                    value={addressform.city}
                    onChange={handleChangeforAdress}
                    border="1px solid black"
                    _placeholder={{ color: 'black' }}
                    borderRadius="0.2rem"
                  />
              </Flex>
              <Flex  gap="0.3rem" direction="column" mb="1.5rem">
                <Text>State</Text>
                  <Input
                    name="state"
                    value={addressform.state}
                    onChange={handleChangeforAdress}
                    border="1px solid black"
                    _placeholder={{ color: 'black' }}
                    borderRadius="0.2rem"
                  />
              </Flex>
              <Flex  gap="0.3rem" direction="column" mb="1.5rem">
                <Text>Country</Text>
                  <Input
                    name="country"
                    value={addressform.country}
                    onChange={handleChangeforAdress}
                    border="1px solid black"
                    _placeholder={{ color: 'black' }}
                    borderRadius="0.2rem"
                  />
              </Flex>
              
            </DrawerBody>

            <DrawerFooter>
           <Flex width="100%" gap="5rem" justifyContent="space-between">
           <Button
                flex="1"
                backgroundImage="linear-gradient(180deg,rgba(246,77,24,.99) 0%,#FF7035 100%);"
                colorScheme="white"
                textAlign="center"
                onClick={handleClickDelete}
              >
                CANCEL
              </Button>
              <Button
                flex="1"
                backgroundImage="linear-gradient(180deg,rgba(246,77,24,.99) 0%,#FF7035 100%);"
                colorScheme="white"
                textAlign="center"
                onClick={handleClick1}
              >
                SAVE
              </Button>
           </Flex>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>




      {/* ///////////////   This is view all address data   //////////// */}
      <Drawer
          size={{ base: "sm", sm: "sm", md: "sm" }}
          isOpen={isOpen3}
          placement="right"
          onClose={onClose3}
          finalFocusRef={btnRef}
          position="relative"
        >
          <DrawerOverlay />
          <DrawerContent>
            <Box position="absolute" top="0px" left="0px">
              <DrawerCloseButton background="rgb(200,200,200)" p="0.3rem" />
            </Box>
            <DrawerHeader borderBottom="3px solid rgb(220,220,220)">
              Edit Details
            </DrawerHeader>

            <DrawerBody>
            <Flex
            mt="1rem"
            direction="column"
            gap="0.8rem"
          >
            <Flex gap="0.2rem">
              <Text fontSize={15} color="#121212">
                {loginStore.details.name}
              </Text>
              <Text fontSize={15} color="#848484">
                HOME
              </Text>
            </Flex>
            <Text fontSize={15} color="#121212">
             {addressform.address1}
            </Text>
            <Text fontSize={15} color="#121212">
            {addressform.address2}
            </Text>
            <Text fontSize={15} color="#121212">
            {addressform.city + " " + "-" + " " + addressform.pincode }
            </Text>
            <Text fontSize={15} color="#121212">
              89765
            </Text>
            <Button
              width="5rem"
              leftIcon={<BiEditAlt />}
              border="1px solid rgba(190, 190, 190,0.9)"
              colorScheme="rgba(213, 210, 210,0.5)"
              variant="outline"
              visibility={{base:"hidden",md:"visible"}}
              onClick={()=>{onOpen2();onClose3()}}
            >
              Edit
            </Button>
          </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

    </Flex>
  );
};

export default userAccount;
