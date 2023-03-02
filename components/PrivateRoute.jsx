import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";
import AuthModals from "../components/login_signup/authModals";

function PrivateRoute({ children }) {
  let [auth, setAuth] = useState(false);
  const toast = useToast();

  useEffect(() => {
    setAuth(localStorage.getItem("hiUser"));
  }, []);

  if (!auth) {
    return (
      <VStack h="80vh" w="100vw" justify={"center"} gap="2" mb="15px">
        <Image
          w="20%"
          src="https://willitstechnol.wpenginepowered.com/wp-content/uploads/2015/10/Local-Admin-Rights.jpg"
        />
        <Heading>Login Required</Heading>
        <p>login to see the items in the cart by cliking</p>
        <Flex
          bg="#e75a16"
          color={"white"}
          p="4"
          gap={4}
          align="center"
          borderRadius={"5px"}
        >
          <Text fontSize="xl" fontWeight={"bold"}>
            CLICK HERE
          </Text>
          <Link>
            <AuthModals />
          </Link>
        </Flex>
      </VStack>
    );
  }
  return children;
}

export default PrivateRoute;
