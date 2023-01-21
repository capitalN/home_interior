import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

export default function AdminLogin() {
  const [inputVal, setInputVal] = useState({ email: "", password: "" });
  const Router = useRouter()

  const handleInput = (e) => {
    let { placeholder, value } = e.target;
    setInputVal({ ...inputVal, [placeholder]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://reqres.in/api/login", inputVal);
      localStorage.setItem("adminAuth", true);
      Router.push("admin");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"}>
      <form onSubmit={handleSubmit}>
        <Stack>
          <Heading>Admin Login</Heading>
          <Input
            placeholder="email"
            value={inputVal.email}
            onChange={handleInput}
            type={"email"}
          />
          <Input
            placeholder="password"
            value={inputVal.password}
            onChange={handleInput}
            type={"password"}
          />
          <Button type="sumit" colorScheme={"red"}>
            Submit
          </Button>
        </Stack>
      </form>
    </Flex>
  );
}
