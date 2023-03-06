// react imports
import React, { useEffect, useState } from "react";

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
import { user_login } from "@/reducer/user/actions";
import { useRouter } from "next/router";

const initialData = {
  email: "",
  password: "",
};

export default function Login() {
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState(initialData);
  const Router = useRouter();

  const { details } = useSelector((store) => store.userManager);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(user_login(inputData));
  };

  if (details) {
    Router.push("/");
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
      <Center minH="90vh">
        <Stack w="300px" bgColor={"white"} p="20px">
          <Heading>LOGIN</Heading>
          <br />
          <p>email</p>
          <Input
            onChange={handleChange}
            name="email"
            value={inputData.email}
            type="email"
          />
          <p>password</p>
          <Input
            onChange={handleChange}
            name="password"
            value={inputData.password}
            type="password"
          />
          <br />
          <Button onClick={handleSubmit}>LOGIN</Button>
          <br />
          <Text as={Link} href={"/auth/register"} textAlign="center">
            new user? click here to SIGN UP
          </Text>
        </Stack>
      </Center>
    </Box>
  );
}
