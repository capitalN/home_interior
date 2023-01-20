import { InfoIcon } from '@chakra-ui/icons'
import { Spacer } from '@chakra-ui/react'
import { Flex, Heading, Image, Text, Checkbox, Box } from '@chakra-ui/react'
import React from 'react'
import { MdNavigateNext } from "react-icons/md"

const SfontSize = {
    fontSize:"12px"
}
const mediumfontSize = {
    fontSize:"14px",
    padding:"0.5rem"
}

const BfontSize = {
    fontSize:"16px"
}
const VeryBfontSize={
    fontSize:"20px"
}

const border={border:"1px solid grey"}

const Section2 = () => {
  return (
    <Flex direction="column" 
          flex="1" 
          gap="1rem"
         >
        <Flex alignItems="center">
            <Text style={SfontSize}>Delivering To</Text>
            <Spacer/>
            <Text color="#FF7035" style={mediumfontSize}><b>Change</b></Text>
        </Flex>
        <Flex style={border} direction="column">
           <Text style={mediumfontSize}><b>Shakil Pendhari</b> HOME</Text>
           <Text style={mediumfontSize}><span>abc road,</span>bindu chowk,<span></span><span>kolpaur,</span><span>Mahararastra</span><span>416120</span></Text>
        </Flex>
        <Flex alignItems="center"     
              border="1px solid grey"
              p="5px">
            <Flex alignItems="center" >
               <Image src="https://ii2.pepperfry.com/assets/w22-coupon-card-icon.svg"/>
               <Text style={ SfontSize } ml="0.5rem">Apply Coupon</Text>
            </Flex>
            <Spacer/>
            <MdNavigateNext />
        </Flex>
        <Flex direction="column"
              border="1px solid grey"
              p="5px">
            <Text style={VeryBfontSize} textAlign="center">Cart Summary</Text>
            <Flex>
                <Text style={mediumfontSize}>Items In Cart</Text>
                <Spacer/>
                <Text style={mediumfontSize} as="span">4</Text>
            </Flex>
            <Flex>
                <Text style={mediumfontSize}>Cart Total Price</Text>
                <Spacer/>
                <Text style={mediumfontSize} as="span">₹ <span>47,400</span></Text>
            </Flex>
            <Flex alignItems="center">
                <Flex alignItems="center">
                <Checkbox size='lg' colorScheme='orange' ></Checkbox>
                <Text  style={mediumfontSize}>Save the Environment, Plant a Tree</Text>
                <InfoIcon />
                </Flex>
                <Spacer/>
                <Text style={mediumfontSize}>₹0</Text>
            </Flex>
            <Flex alignItems="center">
                <Flex alignItems="center">
                <Checkbox size='lg' colorScheme='orange' defaultChecked></Checkbox>
                <Text color="#1979B5" style={mediumfontSize}>Redeem Cashback Credits</Text>
                <InfoIcon color="#1979B5"/>
                </Flex>
                <Spacer/>
                <Text color="#1979B5" style={mediumfontSize}>-₹2,000</Text>
            </Flex>
            <Flex>
                <Flex style={BfontSize} alignItems="center" as="b">YOU PAY  <Text style={SfontSize}> (Inclusive of All Taxes)</Text></Flex>
                <Spacer/>
                <Heading fontSize="0.9rem" as="b">₹45,400</Heading>
            </Flex>
            <Flex>
                <Text style={SfontSize} color="#67AD5B">You Saved</Text>
                <Spacer/>
                <Text color="#67AD5B">₹16,432</Text>
            </Flex>
        </Flex>
        <Flex>
            <Text>Use GSTIN For Business Purchase (Optional)</Text>
            <Spacer/>
            <MdNavigateNext/>
        </Flex>
        <Flex backgroundColor="#FF7035"
              color="white"
              justifyContent="center"
              height="2.5rem"
              alignItems="center"
               >
            PROCEED TO PAY
        </Flex>
    </Flex>
  )
}

export default Section2