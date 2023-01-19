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
} from "@chakra-ui/react";
import React from "react";
import { CiUser } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../reducer/AuthReducer/authAction"
import LoginModal from "./loginModal";

function SignupModal() {
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

  const handleLogin = () => {
    return <LoginModal/>
  }

  return (
    <>
      <CiUser size={25} onClick={onOpen} />

      <Modal isOpen={isOpen} onClose={onClose} size={"2xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton size={"sm"} />

          <Box m={0} p={0}>
            <Image src="https://ii1.pepperfry.com/media/wysiwyg/banners/Web_IMG_17Dec1x_2712.jpg" />
          </Box>
          <Box
            w={"45%"}
            display={"inline-block"}
            position={"absolute"}
            top={5}
            left={320}
          >
            <FormControl>
              <FormLabel m={0} fontSize="xs" color="brand.900">
                Name
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
                Mobile Number
              </FormLabel>
              <Input
                onChange={(e) => handleChange(e)}
                mb={5}
                name="mobile"
                type="text"
                size={"sm"}
                border={"1px solid #777"}
                _focus={{ borderColor: "brand.100" }}
              />
              <FormErrorMessage mb={3}>
                Please enter your mobile number
              </FormErrorMessage>
              <FormLabel m={0} fontSize="xs" color="brand.900">
                Email
              </FormLabel>
              <Input
                onChange={(e) => handleChange(e)}
                mb={5}
                name="email"
                type="email"
                size={"sm"}
                border={"1px solid #777"}
                _focus={{ borderColor: "brand.100" }}
              />
              <FormErrorMessage mb={3}>
                Please enter your email
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
                YEAH! I WANT CREDITS
              </Button>
            </FormControl>

            <Text fontSize={"xs"} textAlign="center" m={2}>
              By registering you agree to our{" "}
              <Link
                color={"brand.900"}
                href="https://www.pepperfry.com/terms-of-use.html"
              >
                Terms & Conditions
              </Link>
            </Text>

            <Button
              mt={6}
              variant="outline"
              borderRadius={"3px"}
              w="100%"
              fontWeight={400}
              fontSize={"sm"}
              onClick={()=>handleLogin()}
            >
              Existing User? Log In
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

export default SignupModal;
