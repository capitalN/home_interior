// react imports
import React, { useState } from "react";

// chakra imports
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { user_register } from "@/reducer/user/actions";
import { useRouter } from "next/router";

const initialData = {
  name: "",
  contact: "",
  email: "",
  password: "",
};

export default function Register() {
  const dispatch = useDispatch();
  const { token } = useSelector((store) => store.userManager);
  const Router = useRouter();

  const [inputData, setInputData] = useState(initialData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(user_register(inputData));
    setInputData(initialData);
  };

  if (token) {
    Router.back();
    return;
  }

  return (
    <Box
      backgroundImage={
        "https://www.pepperfry.ltd/wp-content/uploads/2023/02/beliefs_img3.png"
      }
      backgroundRepeat="no-repeat"
      backgroundSize={"cover"}
      backgroundPosition="center"
    >
      <Center minH={"90vh"}>
        <Stack w="350px" bgColor={"white"} p="20px">
          <Heading textAlign="center">REGISTER</Heading>
          <p>name</p>
          <Input
            onChange={handleChange}
            name="name"
            value={inputData.name}
            type="name"
          />
          <p>email</p>
          <Input
            onChange={handleChange}
            name="email"
            value={inputData.email}
            type="email"
          />
          <p>contact</p>
          <Input
            onChange={handleChange}
            name="contact"
            value={inputData.contact}
            type="contact"
          />
          <p>password</p>
          <Input
            onChange={handleChange}
            name="password"
            value={inputData.password}
            type="password"
          />
          <br />
          <Button onClick={handleSubmit}>SIGN UP</Button>
          <br />
          <Text as={Link} href={"/auth/login"} textAlign="center">
            already a user? click here to LOGIN
          </Text>
        </Stack>
      </Center>
    </Box>
  );
}
