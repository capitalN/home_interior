import { ReactNode } from 'react';
import React from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Input,
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { HiSearch } from 'react-icons/hi';
import { BsHeart ,BsCart2 } from 'react-icons/bs';
import { CiUser } from 'react-icons/ci';
import SignupModal from './signupModal';
import { Link as RouterLink } from "react-router-dom";

const Links = ['Dashboard', 'Projects', 'Team'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('orange.200', 'orange.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box  px={4}>
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'} cursor={'pointer'}>
          <IconButton
            size={'lg'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />

            <Box marginLeft={14}>
              {/* <RouterLink to="/"> */}
                <Image src='/home_interior_logo.png' w="130px" />
          
              {/* </RouterLink> */}

            </Box>
            {/* <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack> */}
            <Box spacing={20}
            // display={{ base: 'none', md: '' }}>
              display={{ base: 'none',lg:"flex", md: '500px' }} 
              justifyItems="center" border="0px solid"
              padding="0 5px"  bgColor={"orange.400"}> 

              <Input  w="800px" border="none" bgColor="orange.400" _hover={"none"} />
              <Flex alignItems={'center'}> <HiSearch size={20} /></Flex>
             
               </Box>

          <Flex alignItems={'center'} marginRight={14}>
            <HStack spacing={5}>
              {/* <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList> */}
                    {/* <Link href="#"><CiUser size={30} /> </Link> */}
                     <SignupModal /> 
                    <Link href="#"><BsHeart size={30}/></Link>
                    <Link href="#"><BsCart2 size={30} /></Link>
            </HStack>
          </Flex>
        </Flex>
        <hr  />
        <Box spacing={4} p={4}
              display={{ base: 'none', lg:"flex", md: 'none' }} >
         <HStack spacing={10}>
           <Link href="#">Furniture</Link>
           <Link href="#">Home Decor</Link>
           <Link href="#">Lamps & Lighting</Link>
           <Link href="#">Kitchen & Dining</Link>
           <Link href="#">Furnishings</Link>
           <Link href="#">Mattresses</Link>
           <Link href="#">Appliances</Link>
           <Link href="#">Pets</Link>
           <Link href="#">Modular</Link>
           <Link href="#">Gift Cards</Link>
         </HStack>
          </Box>
          <hr  />
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}