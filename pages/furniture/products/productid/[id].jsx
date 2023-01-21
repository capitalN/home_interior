import React from 'react'
import { Box,Text,Flex,Image,Link,SimpleGrid,Divider,Checkbox,HStack,Button,Input, InputGroup,InputRightAddon} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { getProductbyAPI, getProductIdbyAPI } from '@/reducer/Product/Product.API';
import style from './product.module.css';
import { GiAutoRepair } from "react-icons/gi";
import { RiTruckLine } from "react-icons/ri";
import { SiAdguard } from "react-icons/si";
import { ChevronRightIcon } from '@chakra-ui/icons'


const Page = ({product}) => {

let router = useRouter()

  return (
      <Box mt='20px' mb='20px'>
            <Flex m='auto' w={{base:'100%',md:'90%'}} flexDirection={{base:'column',md:'row'}}>
            <Box  w={{base:'95%',md:'50%'}}  m={{base:'auto',md:'0px'}} >
                    <Image src={product.image} m='auto' w={{base:'100%',md:'90%'}} ></Image>
                    <Flex overflow='auto' w='95%' m='auto' gap='5px' mt='10px'>
                    <Image src={product.img1} w='18%' p='5px' border='1px solid gray' ></Image>
                    <Image src={product.img2} w='18%' p='5px' border='1px solid gray' ></Image>
                    <Image src={product.img3} w='18%' p='5px' border='1px solid gray' ></Image>
                    <Image src={product.img4}w='18%' p='5px' border='1px solid gray' ></Image>
                    <Image src={product.img5} w='18%' p='5px' border='1px solid gray'  ></Image>
                    <Image src={product.img6} w='18%' p='5px' border='1px solid gray' ></Image>
                    <Image src={product.img7} w='18%' p='5px' border='1px solid gray' ></Image>
                    <Image src={product.img8} w='18%' p='5px' border='1px solid gray' ></Image>
                   { product.img9 && <Image src={product.img9} w='18%' p='5px' border='1px solid gray' ></Image>}
                   { product.img10 && <Image src={product.img10}w='18%' p='5px' border='1px solid gray' ></Image>}
                    </Flex>
                    </Box>
              <Box w={{base:'95%',md:'60%'}} pl={{base:'0px',md:'20px'}} m={{base:'auto',md:'block'}}>
               
                <Flex alignItems='center' color='gray.700' >Home <ChevronRightIcon/>  Furniture <ChevronRightIcon/> {product.type} <ChevronRightIcon/>  {product.categories}</Flex>
                <br />
                <Text  className={style.pro_name}>{product.name}</Text>
                <Text >12 Months' Warranty</Text>

                 <Flex gap='12px' alignItems='center' >
                  <Text className={style.price}>₹ {product.price}</Text>
                  <Text className={style.discount}>({product.discount}% off)</Text>
                 </Flex>
               
                  <Flex gap={{base:'0px',md:'10px'}} mb='20px' >
                  <Text>Save ₹ {Math.floor(product.price*(product.discount*0.01))}</Text>
                  <Text as='del'>MRP ₹ {Math.floor(product.price*(product.discount*0.01))+product.price}</Text>
                  <Text>(Inc of all taxes)</Text>
                  </Flex>
                  
                  <Text>EMI Starting ₹ 2,065</Text>

                  <Box m='auto' w='99%' mt='15px'>
                    <Image w='100%' src='https://ii2.pepperfry.com/media/wysiwyg/banners/Promo_a1_b1_c1_Web_VIPCouponRepublicSale_2X_2001_ND.jpg' alt='offer card'/>
                  </Box>
                  <Text as='sub' mt='20px'>Enter Pincode to get Delivery Date, Assembly Information and other details</Text>
                   <Flex gap='20px' flexDirection={{base:'column',md:'row'}} mt='10px'>
                    <Text w='12%' fontSize='12px' fontWeight='bold'>DELIVERY</Text>
                    <Box>

                    <InputGroup w={{base:'98%',md:'80%'}} h='30px' mt={{base:'0px',md:'10px'}} mb='20px'>
                     <Input border='1px solid' placeholder='Enter a Pincode' bg='transparent' borderRadius='0px'/>
                     <InputRightAddon children='Apply' bg='#ff7035' />
                    </InputGroup>

                     <Flex flexDirection={{base:'column',md:'row'}} alignItems='center' gap='10px'>
                       <RiTruckLine size='35px' color='gray'/>
                      <Text>Delivery charges as applicable</Text>
                      <Text color='gray' as='b'>Pincode Required</Text>
                     </Flex>
                     <Flex flexDirection={{base:'column',md:'row'}} alignItems='center' gap='10px'>
                       <GiAutoRepair size='35px' color='gray'/> 
                      <Text>Assembly Charges as applicable </Text>
                      <Text  color='gray' as='b'>Pincode Required</Text>
                     </Flex>

                     <Flex bg='#ffeee7' mt='10px' mb='10px' w='fit-content' gap='5px' border='1px solid #ff7035' alignItems='center' p='10px'>
                        <Checkbox size='lg'  isInvalid></Checkbox>
                          <Box ml='10px' mr='10px'>
                            <Text>Add Full Furniture Protection for only ₹ 1,941</Text>
                            <Text>Lern More ?</Text>
                          </Box>
                            <SiAdguard size='30px' color='#ff7035'/>
                    </Flex>

                      <Flex m='auto' gap='10px' mt='20px' mb='30px'>
                           <button className={style.btn1}>ADD TO CART</button>
                           <button className={style.btn2}>BUY NOW</button>
                     </Flex> 

                    </Box>
                      

                   </Flex>
                   
                 

                  <Flex gap='20px' flexDirection={{base:'column',md:'row'}} >
                    <Text fontSize='12px' fontWeight='bold' w={{base:'100%',md:'20%'}}>MORE OFFERS</Text>
                    <Box>
                      <Text>Extra Rs.500 off on Kotak Bank Credit Card EMI:{' '} <Link fontWeight='bold' color='gray' href='' > Code: KOTAKPF5</Link></Text>
                      <Text  color='gray'>Get flat discount of INR 500 on Kotak Bank Credit
                            Card EMI transactions on a minimum purchase value of INR 3,000
                      </Text>
                      <Text>Extra Rs.500 off on BOB CCEMI Card EMI:{' '} <Link fontWeight='bold' color='gray' href=''> Code: BOBPF10</Link></Text>
                      <Text  color='gray'>Get flat discount of INR 500 on Bank Of Baroda Credit Cards EMI Transactions on 
                        a minimum purchase value of INR 3,000
                      </Text>
                      <Text>Extra Promo Benefit</Text>
                      <Text  color='gray'>Get additional coupon benefit by utilizing the cashback credits earned.</Text>
                    </Box>
                  </Flex>

                  <Flex gap='30px' mt='20px' flexDirection={{base:'column',md:'row'}} >
                    <Text  fontSize='12px' fontWeight='bold' w={{base:'100%',md:'10%'}}>DETAILS</Text>
                    <Box>
                    {product.details.split('\n').map((ele,i)=>(
                      <Box ket={i}><Text>{ele}</Text></Box>
                      ))}
                    </Box>
                  </Flex>


                    
              </Box>
            </Flex>
    
      </Box>
  )
}

export async function getStaticPaths(context) {
let Data =await getProductbyAPI()

  return {
    paths: Data.map((ele)=>({ params: { id: String(ele.id) } })),
    fallback: false,
  }
}


export async function getStaticProps(context) {
const id = context.params.id;
const res = await getProductIdbyAPI(id)

  return {
    props: { product:res.data },
  }
}



export default Page
