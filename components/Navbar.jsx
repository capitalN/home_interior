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
import Cart from "./Cart";
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
              {drawer && <Cart setDrawer={setDrawer} drawer={drawer} />}
            </Flex>
          </Box>
        </Flex>
        <hr />
        <Box
          spacing={4}
          p={4}
          display={{ base: "none", lg: "flex", md: "none" }}
        >
          <HStack spacing={10}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
                color="black"
                _hover={{
                  color: useColorModeValue("orange.400", "orange.700"),
                }}
              >
                <Text>Furniture</Text>
              </MenuButton>
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

                <MenuItem>beds</MenuItem>
                <MenuItem>Shoe Racks</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Text color="black">Home Decor</Text>
              </MenuButton>
              <MenuList>
                <MenuItem>Wall Art</MenuItem>
                <MenuItem>Spiritual</MenuItem>
                <MenuItem>Vases</MenuItem>
                <MenuItem>Figurines</MenuItem>
                <MenuItem>Showpieces</MenuItem>
              </MenuList>
            </Menu>

            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Text color="black">Lamps & Lighting</Text>
              </MenuButton>
              <MenuList>
                <MenuItem>Lamps</MenuItem>
                <MenuItem>Ceiling Lights</MenuItem>
                <MenuItem>wall Lights</MenuItem>
                <MenuItem>LED Lights</MenuItem>
                <MenuItem>Smart Lights</MenuItem>
              </MenuList>
            </Menu>

            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Text color="black">Kitchen & Dining</Text>
              </MenuButton>
              <MenuList>
                <MenuItem>Servrware</MenuItem>
                <MenuItem>Teaware</MenuItem>
                <MenuItem>Dinnerware</MenuItem>
                <MenuItem>Table Linen</MenuItem>
                <MenuItem>Cookware</MenuItem>
              </MenuList>
            </Menu>

            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Text color="black">Furnishings</Text>
              </MenuButton>
              <MenuList>
                <MenuItem>Carpets</MenuItem>
                <MenuItem>Bed Sheets</MenuItem>
                <MenuItem>Bed Liner</MenuItem>
                <MenuItem>Essentials</MenuItem>
                <MenuItem>Home Care</MenuItem>
              </MenuList>
            </Menu>

            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Text color="black">Mattresses</Text>
              </MenuButton>
              <MenuList>
                <MenuItem>King size Mattresses</MenuItem>
                <MenuItem>single Mattresses</MenuItem>
                <MenuItem>Bed Wedges</MenuItem>
                <MenuItem>Pillows</MenuItem>
                <MenuItem>Mattress Protectors</MenuItem>
              </MenuList>
            </Menu>

            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Text color="black">Appliances</Text>
              </MenuButton>
              <MenuList>
                <MenuItem>Mixers & Processors</MenuItem>
                <MenuItem>Breakfast Appliances</MenuItem>
                <MenuItem>Food Makers</MenuItem>
                <MenuItem>Chimneys</MenuItem>
                <MenuItem>Fans</MenuItem>
              </MenuList>
            </Menu>

            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Text color="black">Pets</Text>
              </MenuButton>
              <MenuList>
                <MenuItem>Dog Furniture</MenuItem>
                <MenuItem>Cat Furniture</MenuItem>
                <MenuItem>Pet Toys</MenuItem>
                <MenuItem>Pet Furnishings</MenuItem>
                <MenuItem>Pet Grooming</MenuItem>
              </MenuList>
            </Menu>

            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Text color="black">Modular</Text>
              </MenuButton>
              <MenuList>
                <MenuItem>Modular Kitchens</MenuItem>
                <MenuItem>Modular Wardrobes</MenuItem>
              </MenuList>
            </Menu>

            <Link fontSize={"16px"} fontWeight={600} href="#">
              Gift Cards
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
