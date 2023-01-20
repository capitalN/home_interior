import Sidebar from '@/components/accountPage/sidebar'
import { Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import React from 'react'

const Wishlist = () => {

  const { route } = useRouter();
  return (
    <Flex width={"90%"} py={10} m="auto">
      <Sidebar linkEndPoint={route} />
      <Box width={"900px"}>
        <Flex justifyContent={"space-around"}>
          <Flex gap={4}>
            <Stack>
              <Heading size={"md"}>Personal information</Heading>
            </Stack>
          </Flex>
          <Button bg="brand.800" rounded={"none"}>
            Edit Profile
          </Button>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Wishlist