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
  Link,
  Avatar,
} from "@chakra-ui/react";
import React from "react";
import { CiUser } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../reducer/AuthReducer/SignupAuth/signupActions";

function SignupModal() {
  const {
    isOpen: isSignupOpen,
    onOpen: onSignupOpen,
    onClose: onSignupClose,
  } = useDisclosure();
  const dispatch = useDispatch();

  const loginStore = useSelector((store) => store.loginManager);
  const signupStore = useSelector((store) => store.signupManager);

  const [details, setDetails] = React.useState(null);
  const [insecurePassword, setInsecurePassword] = React.useState(false);
  const [invalidEmail, setInvalidEmail] = React.useState(false);

  const handleChange = (e) => {
    const newDetails = {
      ...details,
      [e.target.name]: e.target.value,
    };

    setDetails(newDetails);
    setInvalidEmail(false);
    setInsecurePassword(false);
  };

  const handleFormSubmit = () => {
    if (details == null) {
      window.alert("Please fill the form!");
      return;
    } else if (
      details.email == "" ||
      !details.email.includes("@") ||
      !details.email.includes("@gmail.com")
    ) {
      setInvalidEmail(true);
      return;
    } else if (
      details.password.length >= 8 &&
      details.password.match(/[!\@\#\$\%\^\&\*\+\-]/)
    ) {
      window.alert("Success!");
    } else if (
      details.password.length < 8 &&
      details.password.match(/[!\@\#\$\%\^\&\*\+\-]/)
    ) {
      setInsecurePassword(true);
      return;
    } else if (!details.password.match(/[!\@\#\$\%\^\&\*\+\-]/)) {
      setInsecurePassword(true);
      return;
    }

    setInvalidEmail(false);
    setInsecurePassword(false);
    dispatch(actions.signupSuccess(details));
    onSignupClose();
  };

  return (
    <>
      {loginStore.login ? (
        <Avatar size="sm" name={loginStore.details.name} />
      ) : (
        <CiUser size={25} onClick={onSignupOpen} />
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
                onChange={(e) => handleChange(e)}
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
                onChange={(e) => handleChange(e)}
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
                onChange={(e) => handleChange(e)}
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
                onChange={(e) => handleChange(e)}
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
                onClick={handleFormSubmit}
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
              onClick={() => handleLogin()}
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
