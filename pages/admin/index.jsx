import {
  Text,
  VStack,
  HStack,
  Stack,
  Image,
  Box,
  Heading,
  Grid,
  Button,
  Link,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import React from "react";
import AddProduct from "@/components/adminComponents/AddProducts";
import { delete_from_shop, get_shop } from "@/reducer/Admin/actions";
import UpdateProduct from "@/components/adminComponents/UpdateProduct";

export default function Admin() {
  const { SHOP } = useSelector((store) => store.adminManager);
  const [inputVal, setInputVal] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_shop());
  }, []);

  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(update_shop(inputVal));
  };

  return (
    <VStack>
      <Heading>Admin</Heading>
      <AddProduct />
      <Grid gridTemplateColumns={{lg:"repeat(2, 1fr)"}} gap="30px" p={"20px"}>
        {SHOP.map((product) => (
          <Box key={product.id} boxShadow="xl" textAlign={"left"} p="10px">
            <HStack gap={"5px"}>
              <Image src={product.image} w="30%" p={"5px"} />
              <Stack w={"100%"}>
                <HStack justify={"space-between"}>
                  <Heading>ID: {product.id}</Heading>
                  <DeleteIcon
                    cursor={"pointer"}
                    color="red"
                    onClick={() => {
                      dispatch(delete_from_shop(product.id));
                    }}
                  />
                </HStack>
                <Text fontSize="20px">{product.name}</Text>
                <Text>Price : ₹ {product.price}</Text>
                <UpdateProduct product={product} />
              </Stack>
            </HStack>
          </Box>
        ))}
      </Grid>
    </VStack>
  );
}
