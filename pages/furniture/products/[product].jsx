import { Box,Text,Flex,Image,Link,SimpleGrid,Divider,Checkbox,HStack,Button} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import style from './products.module.css'
import React, { useEffect, useState } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { GetProduct } from '@/reducer/Product/Product.action.js';
import { getProductbyAPI } from '@/reducer/Product/Product.API';
import { SmallAddIcon } from '@chakra-ui/icons';

const Page = ({products}) => {
   
    let router = useRouter()
    let dispatch = useDispatch()

// let data = useSelector((store)=> console.log(store.ProductManager))


// useEffect(()=> {
//    dispatch(GetProduct())
// },[dispatch])

  return (
    <Box>
        {/* <Text>{router.query.product}</Text> */}
        <Box m={{base:'10px',md:'50px'}}>
            <Flex  m='auto' w='fit-content' gap='20px' flexDirection={{base:'column',md:'row'}}>
                <Image border='1px solid gray' w='150px' h='40px' m='auto' src='https://ii1.pepperfry.com/media/wysiwyg/banners/g_home_135x36.jpg' alt='G-Home'/>
                 <Box>
                    <Text as='b' fontSize='xl'>G Home</Text>
                    <Text color='gray'>Items To Choose From.</Text>
                 </Box>
            </Flex>
        </Box>
        <Divider></Divider>
        <Box w={{base:'99%',md:'90%'}} margin='auto' >
            <Flex gap='20px' >
                <Box className={style.sidebar} w='25%' pt='30px'>

                   <Box className={style.filterbox} >
                    <Text as='b'>Sort By</Text><br />
                      <Box m='5px'>
                          <Checkbox size='lg' colorScheme='orange' >
                           High Price First
                          </Checkbox><br />
                          <Checkbox size='lg' colorScheme='orange' >
                           Low Price First
                           </Checkbox><br />
                      </Box>
                   </Box>
                   
                   <Box className={style.filterbox} pt='20px' >
                    <Text as='b'>Storage</Text><br />
                    <Checkbox size='lg' colorScheme='orange' defaultChecked>
                      No Storage
                    </Checkbox><br />
                    <Checkbox size='lg' colorScheme='orange' defaultChecked>
                      Box Storage
                    </Checkbox><br />
                   </Box>
               
                   <Box className={style.filterbox} pt='20px'>
                    <Text as='b'>Price</Text><br />
                    <Checkbox size='lg' colorScheme='orange' defaultChecked>
                      No Storage
                    </Checkbox><br />
                    <Checkbox size='lg' colorScheme='orange' defaultChecked>
                      Box Storage
                    </Checkbox><br />
                   </Box>
                   
                </Box>
                <Box className={style.productbar} w={{base:'99%',md:'75%'}}>
                   <SimpleGrid columns={{base:2,md:3}} spacing='12px' m='auto' mt='30px'>
                   {products && products.map((ele)=>(
                            <Box key={ele.id} className={style.productcard} p='3px'>
                             
                             <Box position='relative' className={style.cardimg}>
                             <Image w='100%' src={ele.image}/>
                              <Button
                               position='absolute'
                               borderRadius='0px'
                               backgroundColor='#ff7035'
                               top='80%'
                               left='30%'
                               display={{base:'none',md:'block'}}
                               >Add To Cart</Button>
                             </Box>

                              <Box mt='15px'>
                                <Text mb='10px' className={style.name} >{ele.name}</Text>
                                <Flex gap='10px' alignItems='center'>
                                <Text as='b' color='orange' fontSize={{base:'sm',md:'xl'}}>₹ {ele.price}</Text>
                                <Text color='#2e2c2c' as='del'>₹ {Math.floor(ele.price*(ele.discount*0.01))+ele.price}</Text>
                                </Flex >
                                <Text fontSize={{base:'sm',md:'xl'}} color='#6cb061' as='b'>{ele.discount}% off</Text>
                               <Flex alignItems='center' gap='5px'><Text fontSize='sm'>Earn Cashback</Text><Text>{Math.floor(ele.price*(ele.discount*0.01))}</Text></Flex>
                              </Box>
                           </Box>
                   ))} 
                   </SimpleGrid>
                </Box>
            </Flex>
        </Box>
    </Box>
  )
}


export async function getServerSideProps(context) {

    let type = context.query.product;
    let res = await getProductbyAPI()
    let data = res.filter((ele)=> ele.type === type)

    return {
      props: {products:data}, // will be passed to the page component as props
    }
  }

export default Page
