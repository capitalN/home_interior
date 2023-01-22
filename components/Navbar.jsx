import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";

import {
  Box,
  Flex,
  HStack,
  Link,
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
  color
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { HiSearch } from "react-icons/hi";
import { BsHeart, BsCart2 } from "react-icons/bs";
import Cart from "./Cart";
import AuthModals from "./login_signup/authModals";



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

  const [searchinput, setSearchinput] = useState("");
  const [data, setData] = useState([]);
  const [searchdata, setSearchdata] = useState([]);

  useEffect(()=>{
        axios.get(`https://icy-thread-zydeco.glitch.me/Furniture`).then((res)=>{
          setData(res.data); 
            console.log(res.data); 
            })
            .catch((error)=>
            console.log(error)
            )
 },[])

  const handlesearch=()=>{
    const value = searchinput
    let temp=[];
            temp = data.filter((d) => {
                d = d.name.toLowerCase();
                return d.indexOf(value) > -1;
            });
            console.log(temp);
            setSearchdata(temp);
    }



  return (
    <>
      <Box px={4} spacing={5}>
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
            display={{ md:"600px",lg:"none" }}
            onClick={isOpen ? onClose : onOpen}
          >

          </IconButton>

          <Box marginLeft={14}>
            <Link href="/">
            <Image src="/home_interior_logo.png" w="140px" />
            </Link>
          </Box>

          <Box
            spacing={20}
            // display={{ base: 'none', md: '' }}>
            display={{ base: "none", lg: "flex", md: "500px" }}
            justifyItems="center"
             border="1px solid"
            borderColor={"brand.300"}
            padding="0 5px"
            bgColor="grey.400"
            borderRadius={"5px"}
          >
            <Input
              w="700px"
              border="none"
              bgColor="white"
              _hover={"none"}
              type="text"
              value={searchinput}
              onChange={(e)=>setSearchinput(e.target.value)}
            />

            <Flex alignItems={"center"}>
              {" "}
              <HiSearch size={20}  onClick={handlesearch} />
            </Flex>
          </Box>

          <Flex alignItems={"center"} marginRight={14}>
            <HStack spacing={5}>
          
               
                <AuthModals />
             

              <Link href="#">
                <BsHeart size={30} />
              </Link>
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
          </Flex>
          {drawer && <Cart setDrawer={setDrawer} drawer={drawer} />}
        </Flex>
        <hr />
        <Box
          spacing={4}
          p={4}
          display={{ base: "none", lg: "flex", md: "none" }}
        >
          <HStack spacing={10} >
            <Menu>
            <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
                color="black"
                _hover={{
                  color: useColorModeValue("orange.500", "orange.500"),
                }}>
                <Text>Furniture</Text>
              </MenuButton>
              <MenuList>
              <MenuItem as={Link} href="/furniture">Furniture</MenuItem>
                <MenuItem>Sofa</MenuItem>
                <MenuItem>Table</MenuItem>
                <MenuItem>Chair</MenuItem>
                <MenuItem>TV & Media Units</MenuItem>
                <MenuItem>beds</MenuItem>
                <MenuItem>Shoe Racks</MenuItem>
              </MenuList>
              </Menu>
              <Menu>
            <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
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
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
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
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
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
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
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
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
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
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
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
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
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
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
                >
                <Text color="black">Modular</Text>
              </MenuButton>
              <MenuList>
                <MenuItem>Modular Kitchens</MenuItem>
                <MenuItem>Modular Wardrobes</MenuItem>
              </MenuList>
              </Menu>
            
            <Link fontSize={"16px"} fontWeight={600} href="#">Gift Cards</Link>


          </HStack>
        </Box>
        <hr />
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
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
