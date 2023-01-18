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
  FormErrorMessage
} from "@chakra-ui/react";
import React from "react";

function SignupModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose} size={"2xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />

          <Box m={0} p={0}>
            <Image src="https://ii1.pepperfry.com/media/wysiwyg/banners/Web_IMG_17Dec1x_2712.jpg"/>
          </Box>
          <Box w={"50%"} display={"inline-block"} position={"absolute"} top={10} left={320} >
          <FormControl >
            <FormLabel>Name</FormLabel>
            <Input type="text" />
            <FormErrorMessage>Please enter your name</FormErrorMessage>
            <FormLabel>Mobile Number</FormLabel>
            <Input type="text" />
            <FormErrorMessage>Please enter your mobile number
              
            </FormErrorMessage>
            <FormLabel>Email</FormLabel>
            <Input type="email" />
            <FormErrorMessage>Please enter your email</FormErrorMessage>
            <FormLabel>Password</FormLabel>
            <Input type="password" />
            <FormErrorMessage>Please enter your password</FormErrorMessage>
          </FormControl>
          </Box>

        </ModalContent>
      </Modal>
    </>
  );
}

export default SignupModal;
