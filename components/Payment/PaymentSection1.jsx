import { InfoIcon } from '@chakra-ui/icons';
import { Image, Flex, Text, Spacer, Box } from '@chakra-ui/react'
import {  BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { usePaymentHook, CardArray } from '../hook/usePaymentHook';
import { Div1, Div2, Div3, Div4, Div5 } from './SmallComponents';


const PaymentSection1 = () => {
    const { flag, handleNavi } = usePaymentHook();
  return (
    <div flex="2" style={{width:"85%",margin:"auto"}}>
       {
        CardArray?.map((item,i)=>{
            const { id, text, img } = item
           return <Box>
           <Flex  justifyContent="center"
                  borderBottom="1px solid rgb(181, 181, 181)"
                  key={id} 
                  p="0.3rem"
                  alignItems="center"
                  onClick={()=>handleNavi(id)}>
            <Flex  gap="1rem" 
                   p="0.7rem 0.2rem"
                   alignItems="center"
                   justifyContent="center">
                <Image src={img} alt={id}/>
                <Text fontSize={{base:"0.8rem",sm:"1rem",md:"1.2rem"}}>{text}</Text>
            </Flex>
            <Spacer/>
            <Box >
             {
                !flag[id]? < BsChevronDown/>: flag[id]?< BsChevronUp/>:<InfoIcon/>
             } 
           
            </Box>
            </Flex>
            <Box p="1rem 0rem" borderBottom="1px solid grey" display={!flag[id]?"none":"block"}>
                {
                    flag.a?<Div1/>:flag.b?<Div1/>:flag.c?<Div2/>:flag.d?<Div3/>:flag.f?<Text>You have no wallet balance</Text>:flag.e?<Div4/>:flag.g?<Div5/>:<Div1/>
                }
            </Box>
           </Box>
        })
       }
    </div>
  )
}
const arr = [`<PaymentSection1/>`]
console.log(arr)

export default PaymentSection1