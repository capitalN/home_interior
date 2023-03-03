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
            console.log('Data is here',res)
            setData(res.data)
        })
    }
    // temp = data.filter((d) => {
    //     d = d.name.toLowerCase();
    //     return d.indexOf(value) > -1;
    //   });
    //   console.log(temp);
    const handelSearch = (quary) => {
        console.log(quary)

       let Search = data.filter(ele=>{
        let name = ele.name.toLowerCase();
        let type = ele.type.toLowerCase()
        return (name.indexOf(quary) > -1 || type.indexOf(quary)> -1)
       })
       console.log(Search)
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
              display={{base:'none',md:'block'}}
              width={{base:'0',md:'300px',xl:'700px'}}
      />

 <Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader as='b' color='orange' fontFamily='serif'>Home Interior</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
     {/* Body Here */}
     <Input  onChange={(e) => handelSearch(e.target.value)} placeholder='Search'  size='sm' />

      {searchData.length > 0 ? <Flex gap='10px' m='auto' mt='10px'>
        
        <Box w='70%' h='350px' overflow='scroll' scrollBehavior='smooth'>
          {
            searchData && searchData.map((ele)=>(
                <Link href={`/furniture/products/${ele.type}`}>
                <Flex onClick={onClose} key={ele.id} h='70px' border='1px solid gray' _hover={{border:'1px solid orange'}} rounded='sm' mb='5px' p='3px'>
                    <Image w='35%'rounded='sm' h='100%' src={ele.img1} alt={ele.name}/>
                    <Box pl='5px'>
                      <Text fontSize='10px'lineHeight='11px'>
                        {ele.name}
                      </Text>
                      <Text as='b' fontSize='12px'>
                        Rating:{ele.rating}/5
                      </Text>
                    </Box>
    
                </Flex>
                </Link>
            ))
          }
        </Box>
        <Flex w='30%' flexDirection='column' gap='5px'>
                    <Text as='b' color='orange' fontFamily='sans-serif' textAlign='center'>Shopping for Living</Text>
                    <Image m='auto' w='60%'rounded='sm'  src='https://ii3.pepperfry.com/media/catalog/product/a/n/494x544/anniston-2-seater-sofa-in-rust-red-colour---mudramark-by-pepperfry---casacraft-by-pepperfry-anniston-6ulp03.jpg'  alt={'sofa'}/>
                    <Image m='auto' w='50%'rounded='sm' src='https://ii2.pepperfry.com/media/catalog/product/s/i/90x99/siramika-solid-wood-coffee-table-in-honey-oak-finish-by-mudramark-siramika-solid-wood-coffee-table-i-05dtgv.jpg' alt={'tvunit'}/>    
                    <Image m='auto' w='50%'rounded='sm'  src='https://ii1.pepperfry.com/media/catalog/product/b/r/90x99/brown-aluminium-paulina-table-lamp-by-decorativeray-brown-aluminium-paulina-table-lamp-by-decorative-1cwmug.jpg'  alt={'chairs'}/>
        </Flex>
           
      </Flex> :   
       <Box>
         <Text mt='5px' as='b' color='orange' fontFamily='sans-serif' textAlign='center'>Shopping for Living Room</Text>
        <Flex w='90%' m='auto' gap='5px'  alignItems='center'>
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
 