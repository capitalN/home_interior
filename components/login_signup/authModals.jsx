import {
  Image,
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
  Avatar,
  Heading
} from "@chakra-ui/react";
import React from "react";
import { SlUser } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../reducer/AuthReducer/SignupAuth/signupActions";
import * as loginActions from "../../reducer/AuthReducer/LoginAuth/loginActions"
import Link from "next/link";

const AuthModals = () => {
  const {
    isOpen: isSignupOpen,
    onOpen: onSignupOpen,
    onClose: onSignupClose,
  } = useDisclosure();

  const dispatch = useDispatch();

  const { isOpen: isLoginOpen, onOpen: onLoginOpen, onClose:onLoginClose } = useDisclosure();

  const [signupDetails, setSignupDetails] = React.useState(null);
  const [insecurePassword, setInsecurePassword] = React.useState(false);
  const [invalidEmail, setInvalidEmail] = React.useState(false);

    const [details, setDetails] = React.useState(null)
    const [passIsEmpty, setPassIsEmpty] = React.useState(false);
    const [emailIsEmpty, setEmailIsEmpty] = React.useState(false);

  const loginStore = useSelector((store) => store.loginManager);
  const signupStore = useSelector((store) => store.signupManager);

  // signup functions

  const handleSignupChange = (e) => {
    const newDetails = {
      ...signupDetails,
      [e.target.name]: e.target.value,
    };
    console.log(newDetails)
    setSignupDetails(newDetails);
    setInvalidEmail(false);
    setInsecurePassword(false);
  };

  const handleSignupFormSubmit = () => {
    // console.log(signupDetails);
    if (signupDetails == null) {
      window.alert("Please fill the form!");
      return;
    } else if (
      signupDetails.email == "" ||
      !signupDetails.email.includes("@") ||
      !signupDetails.email.includes("@gmail.com")
    ) {
      setInvalidEmail(true);
      return;
    } else if (
      signupDetails.password.length >= 8 &&
      signupDetails.password.match(/[!\@\#\$\%\^\&\*\+\-]/)
    ) {
      window.alert("Success!");
    } else if (
      signupDetails.password.length < 8 &&
      signupDetails.password.match(/[!\@\#\$\%\^\&\*\+\-]/)
    ) {
      setInsecurePassword(true);
      return;
    } else if (!signupDetails.password.match(/[!\@\#\$\%\^\&\*\+\-]/)) {
      setInsecurePassword(true);
      return;
    }

    setInvalidEmail(false);
    setInsecurePassword(false);
    dispatch(actions.signupSuccess(signupDetails));
    onSignupClose();
  };

  const swapToLogin = () => {
    onSignupClose();
    onLoginOpen();
    }

  // login functions

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
          dispatch(loginActions.loginSuccess(el));
          onLoginClose();
          alert("Login Successful!");
        } else {
          dispatch(loginActions.loginFailure());
        }
      } else {
        dispatch(loginActions.loginFailure());
      }
    });
    console.log(loginStore);
  };

  const swapToSignup = () => {
    onLoginClose()
    onSignupOpen()
  }

  return (
    <>
      <>
        {loginStore.login ? (
          <Link href="/account"><Avatar size="sm" name={loginStore.details.name} /></Link>
        ) : (
          <SlUser size={30} onClick={onSignupOpen} />
        )}

        <Modal isOpen={isSignupOpen} onClose={onSignupClose} size={"2xl"}>
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
                <FormLabel mb={0} fontSize="xs" color="gray.500">
                  Name
                </FormLabel>
                <Input
                  onChange={(e) => handleSignupChange(e)}
                  name="name"
                  type="text"
                  size={"sm"}
                  border={"1px solid #777"}
                  _focus={{ borderColor: "brand.100" }}
                />
                <FormLabel mt={3} mb={0} fontSize="xs" color="gray.500">
                  Mobile Number
                </FormLabel>
                <Input
                  onChange={(e) => handleSignupChange(e)}
                  name="mobile"
                  type="text"
                  size={"sm"}
                  border={"1px solid #777"}
                  _focus={{ borderColor: "brand.100" }}
                />
                <FormLabel mt={3} mb={0} fontSize="xs" color="gray.500">
                  Email
                </FormLabel>
                <Input
                  onChange={(e) => handleSignupChange(e)}
                  name="email"
                  type="email"
                  size={"sm"}
                  border={"1px solid #777"}
                  _focus={{ borderColor: "brand.100" }}
                />
                {invalidEmail ? (
                  <FormHelperText
                    mb={5}
                    fontSize="xs"
                    color={"red.400"}
                    p={0}
                    m={0}
                  >
                    Please enter valid email
                  </FormHelperText>
                ) : null}
                <FormLabel mt={3} mb={0} fontSize="xs" color="gray.500">
                  Password
                </FormLabel>
                <Input
                  onChange={(e) => handleSignupChange(e)}
                  name="password"
                  type="password"
                  size={"sm"}
                  border={"1px solid #777"}
                  _focus={{ borderColor: "brand.100" }}
                />
                {insecurePassword ? (
                  <FormHelperText color={"red.500"} fontSize="xs" p={0} m={0}>
                    Choose a password of minimum 8 characters having special
                    characters
                  </FormHelperText>
                ) : null}
                <Button
                  onClick={handleSignupFormSubmit}
                  bg={"brand.200"}
                  mt={5}
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
                mt={5}
                variant="outline"
                borderRadius={"3px"}
                w="100%"
                fontWeight={400}
                fontSize={"sm"}
                onClick={swapToLogin}
              >
                Existing User? Log In
              </Button>

              <Flex gap={2} justifyContent="center" mt={5}>
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
              </Flex>
            </Box>
          </ModalContent>
        </Modal>
      </>
      <>
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
                onClick={swapToSignup}
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
              </Flex>
            </Box>
          </ModalContent>
        </Modal>
      </>
    </>
  );
};

export default AuthModals;
