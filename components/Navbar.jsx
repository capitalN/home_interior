import { useEffect, useState } from "react";
import React from "react";
import Search from "./Search.function";

import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  Input,
  Image,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  MenuDivider,
  Heading,
  Text,
  color,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { HiSearch } from "react-icons/hi";
import { BsHeart, BsCart2 } from "react-icons/bs";
import DrawerCart from "./DrawerCart";
import AuthModals from "./login_signup/authModals";
import Link from "next/link";

const NavLink = ({ children }) => (

  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("orange.200", "orange.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [drawer, setDrawer] = useState(false);


  return (
    <>
      <Box px={4} >
        <Flex
          h={20}
          alignItems={"center"}
          justifyContent={"space-between"}
          cursor={"pointer"}
        >
          <IconButton
            size={"lg"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          ></IconButton>

          <Box w="200px">
            <Link href="/">
              <Image src="/home_interior_logo.png" w="100%" alt="" />
            </Link>

          </Box>
    {/* search ....................imported ................here.......... */}
         <Box>
         <Search/>
         </Box>
 {/* search .............................................. */}

          <Box
            spacing={20}
            display={{ base: "none", lg: "flex", md: "500px" }}
            justifyItems="center"
            border="0px solid"
            bgColor="gray.100"
          >
          
          </Box>

          <Box ml='15px'>
            <Flex alignItems={"center"}>
              <HStack spacing={'5px'} >
                <AuthModals size={10}/>
                {/* <Link href="#">
                  <BsHeart size={20} />
                </Link> */}
                <Button
                  
                  onClick={() => {
                    setDrawer((val) => !val);
                  }}
                  href="#"
                  variant="ghost"
                  bgColor="white"
                  color="black"
                >
                  <BsCart2 size={30} />
                </Button>
              </HStack>
              {drawer && <DrawerCart setDrawer={setDrawer} drawer={drawer} />}
            </Flex>
          </Box>
        </Flex>
        <hr />
        <Box
          spacing={4}
          p={4}
          display={{ base: "none", lg: "flex", md: "none" }}
        >
          <HStack spacing={10} w="100%" justify="space-evenly">
            <Menu>
              <MenuButton>FURNITURE</MenuButton>
              <MenuList>
                <MenuItem as={Link} href="/furniture" >
                  Furniture
                </MenuItem>
                <MenuItem as={Link} href="/furniture/products/sofa">
                  Sofa
                </MenuItem>

                <MenuItem as={Link} href="/furniture/products/table">
                  Table
                </MenuItem>

                <MenuItem as={Link} href="/furniture/products/wingchair">
                  Chair
                </MenuItem>

                <MenuItem as={Link} href="/furniture/products/tvunit">
                  TV Unit
                </MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton as={Link} href="/furniture/products/shoerack">
                SHOE RACKS
              </MenuButton>
            </Menu>

            <Menu>
              <MenuButton as={Link} href="/furniture/products/beds">
                BEDS
              </MenuButton>
            </Menu>

            <Menu>
              <MenuButton>KITCHEN & DINING</MenuButton>
            </Menu>

            <Menu>
              <MenuButton>FURNISHING</MenuButton>
            </Menu>

            <Menu>
              <MenuButton>MATTRESSES</MenuButton>
            </Menu>

            <Link fontSize={"16px"} fontWeight={600} href="#">
              GIFT CARDS
            </Link>
          </HStack>
        </Box>
        <hr />
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack onClick={onClose} as={"nav"} spacing={4}>
              <Link href="/furniture">Furniture</Link>
              <Link href="#">Home Decor</Link>
              <Link href="#">Lamps & Lighting</Link>
              <Link href="#">Kitchen & Dining</Link>
              <Link href="#">Furnishings</Link>
              <Link href="#">Mattresses</Link>
              <Link href="#">Appliances</Link>
              <Link href="#">Pets</Link>
              <Link href="#">Modular</Link>
              <Link href="#">Gift Cards</Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
