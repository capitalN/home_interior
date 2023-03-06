import Sidebar from '@/components/accountPage/sidebar'
import { Box, Button, color, Divider, Flex, Grid, GridItem, Heading, HStack, Image, Link, Stack, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { delete_from_cart, get_cart } from "@/reducer/Cart/Cart.action";
import { useDispatch, useSelector } from 'react-redux';
import Section1 from '@/components/CheckoutComponents/Section1';

const Wishlist = () => {

  const { route } = useRouter();

  const data = useSelector((store) => store.cartManager.CART);
  const dispatch = useDispatch();

  console.log(data);

  useEffect(() => {
    dispatch(get_cart());
  }, []);


  return (
    <Flex
    gap="0.5rem"
    width={"75%"}
    m="auto"
    p="0.5rem 1.5rem"
    mb="7rem"
    mt="4rem"
    // border="1px solid red"
  >
    <Box flex="1.37" position="sticky" top="0rem" height="40%">
      <Sidebar linkEndPoint={route} />
    </Box>
      <Box flex="4">
      <br />
      <Heading textAlign="center">My Cart</Heading>
      <br />
      {data?.map((item) => <Section1 {...item} />) && (
              <Grid gap={"30px"} templateColumns="repeat(2, 1fr)">
                {data.map((product) => (
                  <GridItem key={product.id} borderLeft="5px solid orange" p={2}>
                    <HStack gap={"5px"}>
                      <Image src={product.image} w="35%" p={"5px"} />
                      <Stack>
                        <HStack justify={"space-between"}>
                          <Text fontSize={"12px"} color="gray.500">{product.categories}</Text>
                          <Link
                              fontSize="xs"
                              color="white"
                              px={1}
                              py={0.8}
                              bg="red.300"
                            onClick={() =>
                              dispatch(delete_from_cart(product.id))
                            }
                          >
                            Remove
                          </Link>
                        </HStack>
                        <Text fontSize="16px" fontWeight="bold" color="brand.600">{product.name}</Text>
                        <Text fontWeight="bold">Price : ₹{product.price}</Text>
                      </Stack>
                    </HStack>
                    <Divider />
                  </GridItem>
                ))}
              </Grid>
            )}
      </Box>
    </Flex>
  )
}

export default Wishlist