 import React, { useEffect, useState ,useRef} from 'react';
 import Link from "next/link";
 import {
    Box,Button,useDisclosure,Input,Image,Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Flex,
  } from '@chakra-ui/react'
import axios from 'axios';
 
 const Search = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [data,setData] = useState([]);
    const [searchData,setSearchdata] = useState([])
    const [count,setCount]=useState(0)

    const getData = () => {
        axios.get('https://home-interior.onrender.com/furniture')
        .then((res)=>{
            setData(res.data)
        })
    }
  
    const handelSearch = (quary) => {
       let Search = data.filter(ele=>{
        let name = ele.name.toLowerCase();
        let type = ele.type.toLowerCase()
        return (name.indexOf(quary) > -1 || type.indexOf(quary)> -1)
       })
       setSearchdata(Search)
    }


    useEffect(()=>{
      getData()
    },[])


return (
     <div>
            <Input
              w="700px"
              variant='outline'
              bgColor="gray.100"
              type="text"
              placeholder="Search"
              onClick={onOpen}
              size={{base:'sm',md:'md'}}
              width={{base:'300px',md:'300px',xl:'700px'}}
      />

 <Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent >
    <ModalHeader as='b' color='orange' fontFamily='serif'>Home Interior</ModalHeader>
    <ModalCloseButton />
    <ModalBody >
     {/* Body Here */}
     <Input  onChange={(e) => handelSearch(e.target.value)} placeholder='Search'  size='sm' />

      {searchData.length > 0 ? <Flex gap='10px' m='auto' mt='10px'>
        
        <Box  w='100%' h='350px' overflow='scroll' scrollBehavior='smooth'>
          {
            searchData && searchData.map((ele)=>(
                <Link href={`/furniture/products/${ele.type}`} >
                <Flex onClick={onClose} key={ele.id} h='70px' border='2px solid gray' _hover={{border:'2px solid orange'}} 
                rounded='sm' mb='1px' p='2px'>
                    <Image border='1px solid' w='20%'rounded='sm' h='100%' src={ele.img1} alt={ele.name}/>
                    <Box w='80%' pl='5px'>
                      <Text color='black' fontSize='12px'lineHeight='12px'>
                        {ele.name}
                      </Text>
                      <Text as='b' color='orange' fontSize='12px'>
                        Rating:{ele.rating}/5
                      </Text>
                    </Box>
    
                </Flex>
                </Link>
            ))
          }
        </Box>
      </Flex> :   
       <Box display={{base:'none',md:'block'}}>
         <Text mt='5px' as='b' color='orange' fontFamily='sans-serif' textAlign='center'>Shopping for Living Room</Text>
        <Flex  w='90%' m='auto' gap='5px'  alignItems='center'>
         <Image m='auto' w='30%' rounded='sm'  src='https://ii2.pepperfry.com/media/catalog/product/a/p/90x99/appleby-sheesham-wood-arm-chair-in-provincial-teak-finish-by-amberville-appleby-sheesham-wood-arm-ch-hdvnxq.jpg'  alt={'sofa'}/>
         <Image m='auto' w='30%'rounded='sm'  src='https://ii3.pepperfry.com/media/catalog/product/w/i/90x99/william-solid-wood-armchair-in-passion-mahogany-finish-by-amberville-william-solid-wood-armchair-in--7kwls4.jpg'  alt={'chairs'}/>
         <Image m='auto' w='30%'rounded='sm' src='https://ii3.pepperfry.com/media/catalog/product/g/r/90x99/greta-velvet-feel-slipper-chair-in-wine-colour-by-woodsworth-greta-velvet-feel-slipper-chair-in-wine-q7bzc0.jpg' alt={'tvunit'}/>    
         <Image m='auto' w='30%'rounded='sm' src='https://ii2.pepperfry.com/media/catalog/product/s/i/90x99/siramika-solid-wood-coffee-table-in-honey-oak-finish-by-mudramark-siramika-solid-wood-coffee-table-i-05dtgv.jpg' alt={'tvunit'}/>  
        </Flex>
       </Box>
           

      }

    </ModalBody>

    <ModalFooter>
      <Button colorScheme='orange' mr={3} onClick={onClose}>
        Close
      </Button>
    </ModalFooter>
  </ModalContent>
 </Modal>
     </div>
   )
 }
 
 export default Search
 