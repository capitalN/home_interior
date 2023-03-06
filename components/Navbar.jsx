import { useEffect, useState } from "react";
import React from "react";
import Search from "./Search.function";
import style from "./Navbar.module.css";

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
  Center,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { HiSearch } from "react-icons/hi";
import { BsHeart, BsCart2 } from "react-icons/bs";
import DrawerCart from "./DrawerCart";
import AuthModals from "./login_signup/authModals";
import Link from "next/link";
import { useSelector } from "react-redux";

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

  const { details } = useSelector((store) => store.userManager);

  useEffect(() => {
    console.log(details);
  }, [details]);

  return (
    <>
      <Box px={4} position="sticky" top={0} zIndex="1001" bgColor={"white"}>
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
          <Box display={{ base: "none", md: "block" }}>
            <Search />
          </Box>
          {/* search .............................................. */}

          <Box
            spacing={20}
            display={{ base: "none", lg: "flex", md: "500px" }}
            justifyItems="center"
            border="0px solid"
            bgColor="gray.100"
          ></Box>

          <Box ml="15px">
            <Flex alignItems={"center"}>
              <HStack spacing={"5px"} fontWeight="bold">
                {details ? (
                  <Center w="30px" h="30px" border={"2px solid"}>
                    <Link href="/account">{details.name[0]}</Link>
                  </Center>
                ) : (
                  <Link href="/auth/login">LOGIN</Link>
                )}
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
          p={2}
          display={{ base: "none", lg: "flex", md: "none" }}
          fontWeight="bold"
        >
          <HStack spacing={10} w="100%" justify="space-evenly">
            <Menu>
              <MenuButton as={Text}>FURNITURE</MenuButton>
              <MenuList>
                <MenuItem as={Link} href="/furniture">
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
              <MenuButton as={Link} href="/furniture/products/wingchair">
                WING CHAIRS
              </MenuButton>
            </Menu>
            <Menu>
              <MenuButton as={Link} href="/furniture/products/tvunit">
                LIVING ROOM
              </MenuButton>
            </Menu>

            <Menu>
              <MenuButton as={Link} href="/furniture/products/kitchen">
                KITCHEN & DINING
              </MenuButton>
            </Menu>

            <Menu>
              <MenuButton as={Link} href="/furniture/products/table">
                FURNISHING
              </MenuButton>
            </Menu>

            <Link fontSize={"16px"} fontWeight={600} href={"/mattresses"}>
              <Text> MATTRESSES</Text>
            </Link>

            <Link fontSize={"16px"} fontWeight={600} href={"/festiveoffer"}>
              <Text as="b" className={style.textStyle}>
                FESTIVE SALE
              </Text>
            </Link>
          </HStack>
        </Box>
        <hr />
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Box mt="10px">
                <Search />
              </Box>
              <Link onClick={onClose} href="/furniture">
                Furniture
              </Link>
              <Link onClick={onClose} href="/furniture/products/sofa">
                Sofa
              </Link>
              <Link onClick={onClose} href="//furniture/products/table">
                Table
              </Link>
              <Link onClick={onClose} href="/furniture/products/tvunit">
                Kitchen & Dining
              </Link>
              <Link onClick={onClose} href="/furniture/products/wingchair">
                Furnishings
              </Link>
              <Link onClick={onClose} href="/mattresses">
                Mattresses
              </Link>
              <Link onClick={onClose} href="/festiveoffer">
                <Text as="b" className={style.textStyle}>
                  Festive Sale
                </Text>
              </Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
