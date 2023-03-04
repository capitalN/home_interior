import React from 'react';
import Link from "next/link";
import style from "../furniture/furniture.module.css";
import {
    Box,
    Text,
    Flex,
    Image,
    SimpleGrid,
    Divider,
    RadioGroup,
    Checkbox,
    Radio,
    Button
  } from "@chakra-ui/react";
  
  let BestDelas = [
    {
      name: "King Size",
      offer: "50+ Modern Dining Sets",
      img: "https://ii1.pepperfry.com/media/wysiwyg/banners/Mattress_1440_category_14feb_1.jpg",
      link:'sofa'
    },
    {
      name: "Queen Size",
      offer: "50+ Bean Bags",
      img: "https://ii1.pepperfry.com/media/wysiwyg/banners/Mattress_1440_category_14feb_2.jpg",
      link:'wingchair'
    },
    {
      name: "Single",
      offer: "40+ Modern Book Shelves",
      img: "https://ii1.pepperfry.com/media/wysiwyg/banners/Mattress_1440_category_14feb_4.jpg",
      link:'sofa'
    },
    {
      name: "Foldable",
      offer: "50+ Dressers",
      img: "https://ii1.pepperfry.com/media/wysiwyg/banners/Mattress_1440_category_14feb_3.jpg",
      link:'sofa'
    },
    {
        name: "Crib Mattresses",
        offer: "50+ Dressers",
        img: "https://ii1.pepperfry.com/media/wysiwyg/banners/Mattress_1440_category_14feb_6.jpg",
        link:'sofa'
      },
      {
        name: "Pillows",
        offer: "50+ Dressers",
        img: "https://ii1.pepperfry.com/media/wysiwyg/banners/Mattress_1440_category_14feb_9.jpg",
        link:'sofa'
      },
      {
        name: "Bed Wedges",
        offer: "50+ Dressers",
        img: "https://ii1.pepperfry.com/media/wysiwyg/banners/Mattress_1440_category_14feb_7.jpg",
        link:'sofa'
      },
  ];

  let Help = [
    {
      name: "Here's How To Choose The Right Sofa",
      img: "https://ii2.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_1.jpg",
    },
    {
      name: "How To Buy A Perfect Bed For Your Room",
      img: "https://ii3.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_2.jpg",
    },
    {
      name: "Your Guide To Buy The Perfect Mattress",
      img: "https://ii1.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_3.jpg",
    },
    {
      name: "Everything About Cabinets And Sideboards",
      img: "https://ii2.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_4.jpg",
    },
    {
      name: "What To Look For While Buying A Chair",
      img: "https://ii3.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_5.jpg",
    },
    {
      name: " ",
      img: "https://ii1.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_6.jpg",
    },
  ];

const Page = () => {
  return (
   <Box>

      <Box w='90%' m='auto'>
       <Link href=''>
       <Image w='100%' src='https://ii3.pepperfry.com/assets/50dfbb_1676386292290_Mattress_1280_promobanner_14feb_1.jpg' alt='HappyHoli' />
       </Link>
      </Box>
      {/* <Flex w='90%' m='auto' alignItems='center' gap='1px' mt='10px' >
      <Image w='50%' src='https://ii1.pepperfry.com/assets/1688bf_1676353201481_Hp_1280_section2_13feb_1.jpg' alt='HappyHoli' />
      <Image w='50%' src='https://ii1.pepperfry.com/assets/1688bf_1676353201481_Hp_1280_section2_13feb_1.jpg' alt='HappyHoli' />
      </Flex> */}

      <Box mt="50px" w='90%' m='auto' textAlign='center'>
        <Text
          as="b"
          fontSize={{ base: "xl", md: "xl" }}
          className={style.heading}
        >
          Shop By Categories
        </Text>
        <Flex 
        gap="20px" 
        mt="5px" 
        className={style.scroll}>
          {BestDelas.map((ele, i) => (
            <Box 
            key={i} 
             className={style.scrollcard}>
              <Link href={`/furniture/products/${ele.link}`}>
              <Image 
              w="100%" 
              m="auto" 
              src={ele.img} 
              alt={ele.name} />
              <Text 
              fontSize={{ base: "md", md: "xl" }}>
                {ele.name}
              </Text>
              </Link>
            </Box>
          ))}
        </Flex>
      </Box>
      
      

        <Box mt={{base:'20px',md:'40px'}}>
          <Flex w='80%' m='auto'  gap='30px'  flexDirection={{base:'column',md:'row'}}> 
            <Box w={{base:'100%',md:'50%'}}>
            <Image 
            w='80%' 
            h='250px'
            src='https://ii3.pepperfry.com/assets/2d9ce2_1676442089072_Mattress_1280_mattressbytype_14feb_3.jpg'
             alt='HappyHoli' />
            </Box>
            <Box w={{base:'100%',md:'50%'}}>
           
             <Text
             as="b"
             fontSize={{ base: "xl", md: "3xl" }}
             className={style.heading}
             >
               Best For Support & Comfort
              </Text>
              <Text mt={{base:'18px',md:'20px'}}>
                For a fresh start to the new year, consider multifunctional furniture to get more utility from your space.
                With furniture that can serve multiple purposes, you don't have to fill every inch of your room, and your
                home will feel more tidy and productive. Use this list of multipurpose furniture pieces to find out how 
                you can make the most of your precious space.
              </Text>

             <Link href={`/furniture/products/sofa`}>
             <Button mt='15px' >
              See More
            </Button>
            </Link>

            </Box>
          </Flex>
        </Box>

        
        <Box mt={{base:'20px',md:'40px'}} m='auto' >
          <Flex 
          w={{base:'90%',md:'80%'}}
          h='250px'
           m='auto' justifyContent='space-between'
            gap='30px'  
            flexDirection={{base:'column',md:'row'}}> 
           
            <Box w={{base:'100%',md:'50%'}}>
           
             <Text
             as="b"
             fontSize={{ base: "xl", md: "3xl" }}
             className={style.heading}
             >
             Best For Joint Pain
              </Text>
              <Text mt={{base:'18px',md:'20px'}}>
              The Danish concept of Hygge means creating a warm, simple environment that's both comfortable and secure. 
              You can start the year right by being truly present in your space and connecting to those around you in
               meaningful ways. This season, learn how embrace soft lighting, plush textures, and natural materials to 
               incorporate Hygge into your home.
              </Text>

             <Link href={`/furniture/products/sofa`}>
             <Button mt='15px' >
              See More
            </Button>
            </Link>

            </Box>

            <Box w={{base:'100%',md:'50%'}}>
            <Image w='70%' h='250px' src='https://ii3.pepperfry.com/assets/3ce912_1676441992327_Mattress_1280_mattressbytype_14feb_1.jpg' alt='HappyHoli' />
            </Box>

          </Flex>
        </Box>


        <Box mt={{base:'20px',md:'40px'}}>
          <Flex w='80%' m='auto' justifyContent='space-between' gap='30px'  flexDirection={{base:'column',md:'row'}}> 
            <Box w={{base:'100%',md:'50%'}}>
            <Image w='80%' 
            h='250px' 
            m='auto' 
            src='https://ii3.pepperfry.com/assets/83bf46_1676442152101_Mattress_1280_mattressbytype_14feb_5.jpg' 
            alt='HappyHoli' />
            </Box>
            <Box w={{base:'100%',md:'50%'}}>
           
             <Text
             as="b"
             fontSize={{ base: "xl", md: "3xl" }}
             className={style.heading}
             >
             Best For Pressure Relief
              </Text>
              <Text mt={{base:'18px',md:'20px'}}>
              Need a centering breath to build yourself back up? Biophilic design connects you to your space by 
              blurring the lines between indoors and outdoors. When you mimic natural elements like lush greenery
               and calming hues around your home, you experience the same calm and clarity you'd find in the wilderness.
                Here are 10 easy, impactful ways to refresh your interior with life-loving pieces and restore your sense 
                of wellness.
              </Text>

             <Link href={`/furniture/products/wingchair`}>
             <Button mt='15px' >
              See More
            </Button>
            </Link>

            </Box>
          </Flex>
        </Box>

        <Box w='90%' 
        m='auto' 
        mt="50px" 
        mb="30px">
        <Text
          as="b"
          fontSize={{ base: "xl", md: "3xl" }}
          className={style.heading}
        >
          Need Help Buying ?
        </Text>
        <Flex gap="20px" 
        mt="10px" 
        className={style.scroll}>
          {Help.map((ele, i) => (
            <Box key={i} 
            className={style.scrollcard}>
              <Image 
              w="100%" 
              m="auto" 
              src={ele.img} alt={ele.name} />
              <Text fontSize="md" mt="10px">
                {ele.name}
              </Text>
            </Box>
          ))}
        </Flex>
      </Box>
   
   </Box>
  )
}

export default Page
