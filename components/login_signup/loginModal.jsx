import {
  Image,
  ModalBody,
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  Flex,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Box,
  Text,
  Link,
  Heading,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { CiUser } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";

function LoginModal() {
  const {
    isOpen: isLoginOpen,
    onOpen: onLoginOpen,
    onClose: onLoginClose,
  } = useDisclosure();

  const loginStore = useSelector((store) => store.loginManager);
  const signupStore = useSelector((store) => store.signupManager);
  const [details, setDetails] = React.useState(null);
  const [passIsEmpty, setPassIsEmpty] = useState(false);
  const [emailIsEmpty, setEmailIsEmpty] = useState(false);

  const handleChange = (e) => {
    const newDetails = {
      ...details,
      [e.target.name]: e.target.value,
    };
    setDetails(newDetails);
    setPassIsEmpty(false);
    setEmailIsEmpty(false);
  };

  const handleFormSubmit = () => {
    console.log(details);
    if (details == null) {
      window.alert("Please fill the form!");
      return;
    } else if (details.userId == undefined || details.userId == "") {
      setEmailIsEmpty(true);
      return;
    } else if (details.password == undefined || details.password == "") {
      setPassIsEmpty(true);
      return;
    }

    setPassIsEmpty(false);
    setEmailIsEmpty(false);

    signupStore.details.map((el) => {
      if (el.email == details.userId || el.mobile == details.userId) {
        if (el.password == details.password) {
          console.log("woohoo");
          dispatch(actions.loginSuccess(el));
          onLoginClose();
          alert("Login Successful!");
        } else {
          dispatch(actions.loginFailure());
        }
      } else {
        dispatch(actions.loginFailure());
      }
    });
    console.log(loginStore);
  };

  useEffect(() => {
    console.log(loginStore);
  }, [signupStore.details]);

  return (
    <>
      <CiUser size={25} />
      <Button
        mt={5}
        variant="outline"
        borderRadius={"3px"}
        w="100%"
        fontWeight={400}
        fontSize={"sm"}
        onClick={onLoginOpen}
      >
        Existing User? Log In
      </Button>

      <Modal isOpen={isLoginOpen} onClose={onLoginClose} size={"2xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton size={"sm"} />

          <Box m={0} p={0}>
            <Box py={10} px={7} w="45%" position="absolute">
              <Text fontSize={"xl"}>Log In</Text>
              <Heading size={"sm"} color="brand.600">
                You Will Be Able To Track Your Order, Use Wishlist & More.
              </Heading>
            </Box>
            <Image src="https://ii1.pepperfry.com/images/new_login_modal_bg_2020.jpg" />
          </Box>
          <Box
            w={"45%"}
            p={5}
            display={"inline-block"}
            position={"absolute"}
            top={10}
            left={320}
          >
            <FormControl>
              {loginStore.error ? (
                <FormHelperText mb={2} color="red.400">
                  *You entered wrong user details/password
                </FormHelperText>
              ) : null}
              <FormLabel m={0} fontSize="xs" color="gray.500">
                Email/Mobile No.
              </FormLabel>
              <Input
                onChange={(e) => handleChange(e)}
                name="userId"
                type="text"
                size={"sm"}
                border={"1px solid #777"}
                _focus={{ borderColor: "brand.100" }}
              />
              {emailIsEmpty ? (
                <FormHelperText color={"red.500"} fontSize="xs" p={0} m={0}>
                  Please enter email/mobile no.
                </FormHelperText>
              ) : null}

              <FormLabel m={0} fontSize="xs" color="gray.500" mt={5}>
                Password
              </FormLabel>
              <Input
                onChange={(e) => handleChange(e)}
                name="password"
                type="password"
                size={"sm"}
                border={"1px solid #777"}
                _focus={{ borderColor: "brand.100" }}
              />
              {passIsEmpty ? (
                <FormHelperText color={"red.500"} fontSize="xs" p={0} m={0}>
                  Please enter your password
                </FormHelperText>
              ) : null}
              <Button
                onClick={handleFormSubmit}
                bg={"brand.200"}
                borderRadius={"3px"}
                w="100%"
                mt={7}
                fontSize={"xs"}
                _hover={{ bg: "brand.500" }}
              >
                LOG IN
              </Button>
            </FormControl>

            <Text
              fontSize={"sm"}
              textDecoration="underline"
              m={2}
              color="brand.700"
              _hover={{ cursor: "pointer" }}
            >
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
              <Image
                src="https://ii1.pepperfry.com/images/social_login_fb_2x.png"
                h={"auto"}
                w={7}
              />
              <Image
                src="https://ii1.pepperfry.com/images/social_login_google_2x.png"
                h={"auto"}
                w={6}
              />
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
