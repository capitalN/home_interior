import {
    Image,
    ModalBody,
    useDisclosure,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    Flex,
    ModalHeader,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    Box,
    FormErrorMessage,
    Text,
    Link,
    Heading,
  } from "@chakra-ui/react";
  import React from "react";
  import { CiUser } from "react-icons/ci";
  import { useDispatch, useSelector } from "react-redux";
  import * as actions from "../reducer/AuthReducer/authAction"
  
  function LoginModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch();
  
    const name = useSelector((store)=>{
      console.log(store, "store")
      store.name});
    const password = useSelector((store)=>store.password);
    const mobile = useSelector((store)=>store.mobile);
    const email = useSelector((store)=>store.email);
    const [details, setDetails] = React.useState({})
    const [insecurePassword, setInsecurePassword] = React.useState(false);
  
    // const handleChange = (e) => {
    //   if (e.target.name == "name") {
    //     setName(e.target.value);
    //   } else if (e.target.name == "mobile") {
    //     setMobile(e.target.value);
    //   } else if (e.target.name == "email") {
    //     setEmail(e.target.value);
    //   } else {
    //     setPassword(e.target.value);
    //   }
    // };
  
    const handleChange = (e) => {
      const newDetails = {
        ...details,
        [e.target.name]: e.target.value,
      }
  
      dispatch(actions.loginRequest(newDetails))
  
    }
  
    // console.log(name, mobile, email, password);
  
    return (
      <>
        <CiUser size={25} onClick={onOpen} />
  
        <Modal isOpen={isOpen} onClose={onClose} size={"2xl"}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton size={"sm"} />
  
            <Box m={0} p={0}>
                <Box py={10} px={7} w="45%" position="absolute">
                <Text fontSize={"xl"}>Log In</Text>
                <Heading size={"sm"} color="brand.600">You Will Be Able To Track Your Order, Use Wishlist & More.</Heading>
                </Box>
              <Image src="https://ii1.pepperfry.com/images/new_login_modal_bg_2020.jpg" />
            </Box>
            <Box
              w={"45%"}
              p= {5}
              display={"inline-block"}
              position={"absolute"}
              top={10}
              left={320}
            >
              <FormControl>
                <FormLabel m={0} fontSize="xs" color="brand.900">
                  Email/Mobile No.
                </FormLabel>
                <Input
                  onChange={(e) => handleChange(e)}
                  mb={5}
                  name="name"
                  type="text"
                  size={"sm"}
                  border={"1px solid #777"}
                  _focus={{ borderColor: "brand.100" }}
                />
                <FormErrorMessage mb={3}>
                  {name == "" ? "Please enter your name" : ""}
                </FormErrorMessage>
                
                <FormLabel m={0} fontSize="xs" color="brand.900">
                  Password
                </FormLabel>
                <Input
                  onChange={(e) => handleChange(e)}
                  name="password"
                  type="password"
                  size={"sm"}
                  mb={5}
                  border={"1px solid #777"}
                  _focus={{ borderColor: "brand.100" }}
                />
                <FormErrorMessage>Please enter your password</FormErrorMessage>
                <Button
                  bg={"brand.200"}
                  borderRadius={"3px"}
                  w="100%"
                  fontSize={"xs"}
                  _hover={{ bg: "brand.500" }}
                >
                  LOG IN
                </Button>
              </FormControl>
  
              <Text fontSize={"sm"} textDecoration="underline" m={2} color="brand.700" _hover={{cursor:"pointer"}}>
                Forgot Password?
              </Text>
  
              <Button
                mt={16}
                variant="outline"
                borderRadius={"3px"}
                w="100%"
                fontWeight={400}
                fontSize={"sm"}
              >
                New to Home Interior? Register Here
              </Button>
  
              <Flex gap={2} justifyContent="center" mt={7}>
                <Text color={"#999"} fontSize="sm">
                  OR Continue With:
                </Text>
                <Image src="https://ii1.pepperfry.com/images/social_login_fb_2x.png" h={"auto"} w={7}/>
                <Image src="https://ii1.pepperfry.com/images/social_login_google_2x.png" h={"auto"} w={6}/>
                <Link>
                  <Image />
                </Link>
              </Flex>
            </Box>
          </ModalContent>
        </Modal>
      </>
    );
  }
  
  export default LoginModal;
  